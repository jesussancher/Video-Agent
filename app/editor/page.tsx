import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { redirect } from "next/navigation";
import { listCompositions } from "../../src/lib/db";
import { EditorClient } from "./components/EditorClient";

const SESSION_SECRET = new TextEncoder().encode(process.env.SESSION_SECRET!);

async function getUser() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("session")?.value;
  if (!sessionToken) return null;
  try {
    const { payload } = await jwtVerify(sessionToken, SESSION_SECRET);
    return payload as { uid: string };
  } catch {
    return null;
  }
}

export default async function EditorPage() {
  const user = await getUser();
  if (!user) redirect("/login");

  let composition = null;
  try {
    const compositions = await listCompositions(user.uid);
    composition = compositions[0] ?? null;
  } catch {
    // ignore
  }

  return (
    <main style={{ height: "100vh" }}>
      <EditorClient composition={composition} />
    </main>
  );
}
