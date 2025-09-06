import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const hits = new Map<string,{count:number,ts:number}>();

export function middleware(req: NextRequest) {
  if (!req.nextUrl.pathname.startsWith("/api/subscribe")) return NextResponse.next();
  const ip = req.ip || req.headers.get("x-forwarded-for") || "anon";
  const now = Date.now(); 
  const key = `${ip}:${Math.floor(now/60000)}`;
  const rec = hits.get(key) || { count:0, ts:now };
  rec.count++; 
  hits.set(key, rec);
  if (rec.count > 20) return NextResponse.json({ ok:false, error:"Rate limit" }, { status:429 });
  return NextResponse.next();
}
