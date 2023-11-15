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

export default function Home() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [data, setData] = useState<Item[]>([]);
  const [filteredData, setFilteredData] = useState<Item[]>([]);

  async function get() {
    const temp = await getData();
    setData(temp.items);
    setFilteredData(temp.items);
  }

  useEffect(() => {
    void get();
  }, []);

  return (
    <main className="flex flex-col min-h-screen p-8 items-center">
      <Image src={logo} alt="logo" className="absolute top-5 right-10" />
      <SearchBar className="mt-0 md:w-2/5 " />
      <p className="text-3xl mr-auto pt-10 font-medium">Search Results</p>
      <div className="flex w-full">
        <Filters />
        {filteredData && (
          <div className="flex flex-wrap gap-x-8 gap-y-10 justify-end pt-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start relative text-lg"
              >
                <Image
                  src="https://source.unsplash.com/random"
                  alt="item"
                  height={325}
                  width={239}
                  className="pb-2"
                />
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
