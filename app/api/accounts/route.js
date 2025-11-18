// c:\Users\emman\OneDrive\Desktop\chase_bank\app\api\accounts\route.js
import { NextResponse } from "next/server";
import db from "../../../lib/db";
import { verifyToken } from "../../../lib/auth";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value || "";
  const payload = verifyToken(token);
  if (!payload) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const accounts = db.prepare("SELECT id, type, number, balance, status FROM accounts WHERE user_id = ? ORDER BY id").all(Number(payload.uid));
  return NextResponse.json({ accounts });
}