import { NextRequest, NextResponse } from "next/server";
import data from "./data.json";

const items = data.items as Item[];

export function GET(req: NextRequest) {
  return NextResponse.json({ items });
}
