import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { redirect } from "next/navigation";
import { listCompositions, getComposition } from "../../src/lib/db";
import { EditorClient } from "./components/EditorClient";
import type { CompositionDTO } from "../../src/types";

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

interface EditorPageProps {
  searchParams: Promise<{ id?: string }>;
}

export default async function EditorPage({ searchParams }: EditorPageProps) {
  const user = await getUser();
  if (!user) redirect("/login");

  let composition: CompositionDTO | null = null;
  try {
    const { id } = await searchParams;
    if (id) {
      composition = await getComposition(user.uid, id);
    }
    if (!composition) {
      const compositions = await listCompositions(user.uid);
      composition = compositions[0] ?? null;
    }
  } catch {
    // ignore
  }

  return (
    <main style={{ height: "100vh" }}>
      <EditorClient composition={composition} />
    </main>
  );
}
