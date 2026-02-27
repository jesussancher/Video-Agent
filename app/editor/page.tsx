import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { redirect } from "next/navigation";
import EditorClient from "./EditorClient";

const SESSION_SECRET = new TextEncoder().encode(process.env.SESSION_SECRET!);

async function getUser() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("session")?.value;
  if (!sessionToken) return null;
  try {
    const { payload } = await jwtVerify(sessionToken, SESSION_SECRET);
    return payload as { uid: string; email: string; name: string; picture: string };
  } catch {
    return null;
  }
}

export default async function EditorPage() {
  const user = await getUser();
  if (!user) redirect("/login");

  return <EditorClient user={user} />;
}
