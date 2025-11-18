// c:\Users\emman\OneDrive\Desktop\chase_bank\app\api\accounts\status\route.js
import { NextResponse } from "next/server";
import db from "../../../../lib/db";
import { verifyToken } from "../../../../lib/auth";

export const runtime = "nodejs";

export async function GET(req) {
  const auth = req.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  const payload = verifyToken(token);
  if (!payload) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const statuses = db.prepare("SELECT id, type, status FROM accounts WHERE user_id = ?").all(Number(payload.uid));
  return NextResponse.json({ statuses });
}