import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { redirect } from "next/navigation";

const SESSION_SECRET = new TextEncoder().encode(process.env.SESSION_SECRET!);

async function getUser() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("session")?.value;
  if (!sessionToken) return null;
  try {
    const { payload } = await jwtVerify(sessionToken, SESSION_SECRET);
    return payload;
  } catch {
    return null;
  }
}

export default async function EditorPage() {
  const user = await getUser();
  if (!user) redirect("/login");

  const studioUrl = process.env.NEXT_PUBLIC_STUDIO_URL ?? "http://localhost:3001";
  redirect(studioUrl);
}
