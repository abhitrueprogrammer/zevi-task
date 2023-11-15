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
import SearchBar from "@/components/search-bar";

export default function Home() {
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
    <main className="flex min-h-screen bg-home bg-cover bg-no-repeat bg-center pt-[4%] justify-center">
      <Image src={logo} alt="logo" className="absolute top-5 right-10" />
      <SearchBar className="h-12"/>
    </main>
  );
}
