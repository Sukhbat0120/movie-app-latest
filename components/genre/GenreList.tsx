"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GenreType } from "@/lib/types";
import Link from "next/link";
import { getGenreList } from "@/lib/api/getGenresList";

export const GenreList = () => {
  const [genres, setGenres] = useState<GenreType[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const data: GenreType[] = await getGenreList();
      setGenres(data);
    };
    fetchGenres();
  }, []);

  return (
    <div className="w-[577px] bg-white h-[250px]">
      <div className="flex ml-5 justify-between w-full">
        <p className="text-black text-2xl">Genres</p>
      </div>

      <div className="gap-2 w-full flex-wrap flex p-[8px]">
        {genres.map((genre) => (
          <Link
            key={genre.id}
            href={`/genre?genreId=${genre.id}&genreName=${genre.name}`}
          >
            <div className="pb-2">
              <button className="border border-gray-200 hover:bg-gray-300 flex gap-0.5 justify-center px-1.5 rounded-lg text-black font-semibold">
                <p>{genre.name}</p>
                <Image src="/chevron-right.svg" alt="" />
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
