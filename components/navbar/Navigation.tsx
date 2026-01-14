"use client";


import { Input } from "../ui/input";
import { GenreList } from "../genre/GenreList";
import { movieGenres } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
export const Navigation = () => {
  return (
    <nav className="mt-5 w-full h-[52px] rounded-lg flex border shadow-lg justify-center items-center">
      <div className=" w-full flex justify-around
 items-center  ">
        <Link href={"/"} className="flex  items-center gap-3">
          <img src="/film.svg" alt="Logo" className="w-8 h-8" />
          <h2 className="text-indigo-700 text-lg font-bold">Movie Z</h2>
        </Link>

        <div className="flex items-center  gap-8">
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

          <Input className="w-80 border-2 border-gray-600" />
        </div>
      </div>
    </nav>
  );
};
