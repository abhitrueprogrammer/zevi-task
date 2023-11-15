"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import logo from "@/../public/logo.svg";
import { Search } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { getSearchData } from "@/api/api";

export default function Home() {
  const [latest, setLatest] = useState<Item[]>([]);
  const [popular, setPopular] = useState<Item[]>([]);

  async function get() {
    const temp = await getSearchData();
    setLatest(temp.latest);
    setPopular(temp.popular);
  }

  useEffect(() => {
    void get();
  }, []);

  return (
    <main className="flex min-h-screen bg-home bg-cover bg-no-repeat bg-center pt-[4%] justify-center">
      <Image src={logo} alt="logo" className="absolute top-5 right-10" />
      <Popover>
        <PopoverTrigger className="w-4/5 mt-10 md:w-1/2 flex items-center h-fit relative">
          <Input className="pr-10 h-12 text-base" />
          <Search className="absolute right-2 text-muted-foreground" />
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
    </main>
  );
}
