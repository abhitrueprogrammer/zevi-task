import { NextResponse } from "next/server";
import data from "./data.json";

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

export function GET(){
    return NextResponse.json({data});
}