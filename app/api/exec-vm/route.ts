import { NextResponse } from "next/server";
import ivm from "isolated-vm";

export async function GET(
  req: Request,
  { params }: { params: { sessionId: string } }
) {
  const isolate = new ivm.Isolate();
  return NextResponse.json({ message: "yes" });
}
