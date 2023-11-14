import { NextRequest, NextResponse } from "next/server";
import data from "./data.json";
import { selectRandomItems } from "@/lib/utils";

interface Item {
  name: string;
  image: string;
  actualPrice: number;
  discountPrice: number;
  rating: number;
  reviews: number;
  brand: string;
  isWishlisted: boolean;
}

const items = data.items as Item[];

export function GET(req: NextRequest) {
  return NextResponse.json({ items });
}
