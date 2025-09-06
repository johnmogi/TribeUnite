import { NextResponse } from "next/server";

// Temporary in-memory storage for testing
const subscribers: string[] = [];

export async function POST(req: Request) {
  const { email, source, nickname, ts } = await req.json().catch(() => ({}));
  
  // Form hardening: reject if honeypot filled or submission too fast
  if (nickname) return NextResponse.json({ ok:false, error:"Invalid submission" }, { status:400 });
  if (ts && Date.now() - parseInt(ts) < 1500) return NextResponse.json({ ok:false, error:"Too fast" }, { status:400 });
  
  const valid = typeof email === "string" && /^\S+@\S+\.\S+$/.test(email);
  if (!valid) return NextResponse.json({ ok:false, error:"Invalid email" }, { status:400 });

  const lowered = email.toLowerCase().trim();
  if (!subscribers.includes(lowered)) {
    subscribers.push(lowered);
    console.log(`New subscriber: ${lowered} (source: ${source || "landing"})`);
  }
  
  return NextResponse.json({ ok:true });
}
