"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Search } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { getSearchData } from "@/api/api";
import { cn } from "@/lib/utils";

export default function SearchBar({ className }: { className?: string }) {
  const [latest, setLatest] = useState<Item[]>([]);
  const [popular, setPopular] = useState<Item[]>([]);
  const [search, setSearch] = useState("");

  async function get() {
    const temp = await getSearchData();
    setLatest(temp.latest);
    setPopular(temp.popular);
  }

  const handleSearch = () => {
    if (search) {
      window.location.href = `/search?q=${search}`;
    }
  };

  useEffect(() => {
    void get();
  }, []);

  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          "w-4/5 mt-10 md:w-1/2 flex items-center h-fit relative",
          className
        )}
      >
        <Input
          className="pr-10 h-full text-base"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <Search
          className="absolute right-2 text-muted-foreground"
          onClick={handleSearch}
        />
      </PopoverTrigger>
      <PopoverContent className="w-[80vw] h-fit px-10 py-5">
        <p className="font-medium text-xl">Latest Trends</p>
        <div className="flex w-full justify-between py-6">
          {latest.map((item, index) => (
            <div key={index} className="flex flex-col items-start">
              <Image
                src="https://source.unsplash.com/random"
                alt="item"
                height={223}
                width={165}
                className="pb-4"
              />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <p className="font-medium text-xl">Popular suggestions</p>
        <div className="flex flex-col w-full justify-between py-2 ">
          {popular.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
