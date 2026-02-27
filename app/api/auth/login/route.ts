import { NextRequest, NextResponse } from "next/server";
import { adminAuth } from "@/firebase-admin";
import { SignJWT } from "jose";

const SESSION_SECRET = new TextEncoder().encode(process.env.SESSION_SECRET!);
const SESSION_DURATION = 60 * 60 * 24 * 7; // 7 días en segundos

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const { idToken } = body;

  if (!idToken) {
    return NextResponse.json({ error: "idToken requerido" }, { status: 400 });
  }

  try {
    const decoded = await adminAuth.verifyIdToken(idToken);

    const sessionToken = await new SignJWT({
      uid: decoded.uid,
      email: decoded.email ?? null,
      name: decoded.name ?? null,
      picture: decoded.picture ?? null,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime(`${SESSION_DURATION}s`)
      .sign(SESSION_SECRET);

    const response = NextResponse.json({
      user: {
        uid: decoded.uid,
        email: decoded.email,
        name: decoded.name,
        picture: decoded.picture,
      },
    });

    response.cookies.set("session", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: SESSION_DURATION,
      path: "/",
    });

    return response;
  } catch (err) {
    console.error("[auth/login]", err);
    return NextResponse.json({ error: "Token inválido" }, { status: 401 });
  }
}
