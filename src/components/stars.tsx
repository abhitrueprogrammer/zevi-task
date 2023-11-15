import { getStarsArray } from "@/lib/utils";
import { Star } from "lucide-react";

export default function Stars({ rating }: { rating: number }) {
  const starArr = getStarsArray(rating);
  return (
    <div className="flex items-center">
      {starArr.map((star, index) => (
        <Star
          key={index}
          size={20}
          className={`${
            star === 0 ? "text-gray-300" : "fill-[#FBBF24] text-[#FBBF24]"
          } mr-1 `}
        />
      ))}
    </div>
  );
}
