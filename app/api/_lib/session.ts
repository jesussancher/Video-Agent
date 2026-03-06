import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

const SESSION_SECRET = new TextEncoder().encode(process.env.SESSION_SECRET!);

export interface SessionUser {
  uid: string;
  email: string;
  name: string;
  picture: string;
}

/** Extrae el usuario de la cookie de sesión. Devuelve null si no hay sesión válida. */
export async function getSessionUser(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, SESSION_SECRET);
    return payload as unknown as SessionUser;
  } catch {
    return null;
  }
}

/**
 * Requiere sesión válida. Devuelve el usuario o lanza una NextResponse 401
 * que el handler puede retornar directamente.
 */
export async function requireAuth(): Promise<
  SessionUser | { error: NextResponse }
> {
  const user = await getSessionUser();
  if (!user) {
    return {
      error: NextResponse.json({ error: "No autorizado" }, { status: 401 }),
    };
  }
  return user;
}

/** Type guard para verificar si el resultado es un error de auth */
export function isAuthError(
  result: SessionUser | { error: NextResponse }
): result is { error: NextResponse } {
  return "error" in result;
}
