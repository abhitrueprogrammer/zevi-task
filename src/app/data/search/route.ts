import { NextResponse } from "next/server";
import data from "../data.json";
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
const latest: Item[] = selectRandomItems(items, 5);
const popular: Item[] = selectRandomItems(items, 5);

export function GET(){
    return NextResponse.json({latest, popular});
}