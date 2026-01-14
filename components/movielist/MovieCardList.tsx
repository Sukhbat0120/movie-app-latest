"use client";
import { MovieCard } from "./MovieCard";
import { MovieType } from "@/lib/types";
import Link from "next/link";
type Props = {
  movies: MovieType[];
  text: string;
  category: string;
};

export const MovieCardList = ({ movies, text, category }: Props) => {
  return (
    <div className="flex flex-col gap-3 px-5 ">
      <div className="flex justify-between">
        <h1 className="text-3xl text-black text-bold "> {text} </h1>
        <Link href={`/category${category}`} className="text-black text-semibold">see more </Link>
      </div>

      <div className="flex gap-10 flex-wrap ">
        {movies.slice(0, 10).map((movie) => (
          <MovieCard
            imgclassname="h-[340px] w-full "
            containercss="w-[229px] h-[439px]"
            movie={movie}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
};
