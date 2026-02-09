"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { GenreList } from "../genre/GenreList";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";

export const Navigation = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchValue.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchValue)}&page=1`);
    }
  };

  return (
    <nav className="mt-5 w-full h-[52px] rounded-lg flex border shadow-lg justify-center items-center">
      <div className="w-full flex justify-around items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/film.svg" alt="Logo" width={32} height={32} />
          <h2 className="text-indigo-700 text-lg font-bold">Movie Z</h2>
        </Link>

        <div className="flex items-center gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="px-3 py-1 bg-white rounded-md text-black shadow hover:bg-gray-100 transition">
              Genre
            </DropdownMenuTrigger>
            <DropdownMenuContent className="ml-80 mt-4">
              <DropdownMenuLabel>
                <h1 className="text-2xl">Genres</h1>
                <p className="text-gray-600 text-lg">
                  See list of movies by genre
                </p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="my-2" />
              <DropdownMenuItem>
                <GenreList />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Input
            className="w-80 border-2 border-gray-600"
            placeholder="Search movies..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
      </div>
    </nav>
  );
};
