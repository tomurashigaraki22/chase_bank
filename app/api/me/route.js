// c:\Users\emman\OneDrive\Desktop\chase_bank\app\api\me\route.js
import { NextResponse } from "next/server";
import db from "../../../lib/db";
import { verifyToken } from "../../../lib/auth";

export const runtime = "nodejs";

export async function GET(req) {
  const auth = req.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  const payload = verifyToken(token);
  if (!payload) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = db
    .prepare("SELECT id, email, first_name, last_name, created_at FROM users WHERE id = ?")
    .get(Number(payload.uid));
  if (!user) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json({ user });
}