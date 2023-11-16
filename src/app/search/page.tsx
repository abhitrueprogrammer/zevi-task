"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import logo from "@/../public/logo.svg";
import { useEffect, useState } from "react";
import { getData } from "@/api/api";
import { useSearchParams } from "next/navigation";

import SearchBar from "@/components/search-bar";
import Stars from "@/components/stars";
import { Filters } from "@/components/filters";
import { Heart } from "lucide-react";

export default function Home() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [data, setData] = useState<Item[]>([]);
  const [filteredData, setFilteredData] = useState<Item[]>([]);
  const [hovered, setHovered] = useState<number>(-1);
  const [filters, setFilters] = useState<Filters>({
    mango: false,
    hm: false,
    500: false,
    1000: false,
    5: false,
    4: false,
    3: false,
    2: false,
    1: false,
  });

  async function get() {
    const temp = await getData();
    setData(temp.items);
    setFilteredData(temp.items);
  }

  useEffect(() => {
    void get();
  }, []);

  useEffect(() => {
    if (
      !(
        filters.mango ||
        filters.hm ||
        filters[500] ||
        filters[1000] ||
        filters[5] ||
        filters[4] ||
        filters[3] ||
        filters[2] ||
        filters[1]
      )
    ) {
      setFilteredData(data);
      return;
    }
    const temp = data.filter((item) => {
      if (filters.mango && item.brand === "Mango") return true;
      if (filters.hm && item.brand === "H&M") return true;
      if (filters[500] && item.discountPrice <= 500) return true;
      if (
        filters[1000] &&
        item.discountPrice > 1000 &&
        item.discountPrice <= 3000
      )
        return true;
      if (filters[5] && Math.floor(item.rating) === 5) return true;
      if (filters[4] && Math.floor(item.rating) === 4) return true;
      if (filters[3] && Math.floor(item.rating) === 3) return true;
      if (filters[2] && Math.floor(item.rating) === 2) return true;
      if (filters[1] && Math.floor(item.rating) === 1) return true;
      return false;
    });
    setFilteredData(temp);
  }, [filters]);

  useEffect(() => {
    console.log(hovered);
  }, [hovered]);

  return (
    <main className="flex flex-col min-h-screen p-8 items-center">
      <Image src={logo} alt="logo" className="absolute top-5 right-10" />
      <SearchBar className="mt-0 md:w-2/5 " />
      <p className="text-3xl mr-auto pt-10 font-medium">Search Results</p>
      <div className="flex w-full">
        <Filters filters={filters} setFilters={setFilters} />
        {filteredData && (
          <div className="flex flex-wrap gap-x-8 gap-y-10 justify-between px-4">
            {filteredData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start relative text-lg"
                onMouseOver={() => setHovered(index)}
                onMouseLeave={() => setHovered(-1)}
              >
                <Heart
                  className={`absolute top-2 right-2 cursor-pointer ${
                    item.isWishlisted
                      ? "text-red-500 fill-red-500"
                      : "text-white"
                  }`}
                  onClick={() => {
                    const temp = [...data];
                    temp[index].isWishlisted = !temp[index].isWishlisted;
                    setData(temp);
                  }}
                />
                <Image
                  src="https://source.unsplash.com/random"
                  alt="item"
                  height={325}
                  width={239}
                  className="pb-2"
                />
                <div
                  className={`bg-[#6d84ffb5]  absolute w-full p-2 text-center text-white cursor-pointer duration-700 ${
                    hovered === index ? "top-[315px]" : "z-[-1] top-[335px] bg-white"
                  }`}
                >
                  View Product
                </div>
                <p className="font-semibold">{item.name}</p>
                <p>
                  <s className="text-muted-foreground font-light">{`Rs. ${item.actualPrice}`}</s>
                  <span className="pl-2 font-semibold text-[#6D84FF]">{`Rs. ${item.discountPrice}`}</span>
                </p>
                <span className="flex">
                  <Stars rating={item.rating} /> {`(${item.reviews})`}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
