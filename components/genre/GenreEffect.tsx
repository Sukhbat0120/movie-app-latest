import { MovieCard } from "../movielist/MovieCard";
import { MovieType } from "@/lib/types";
import { movieGenres } from "@/lib/utils";
import { GenreList } from "./GenreList";
type Props = {
  genreName: string;
  movies: MovieType[];
};
export const GenreEffect = ({ genreName, movies }: Props) => {
  return (
    <div className="mt-20 w-full ">
      <p className="text-3xl mb-8 ml-11 ">Genre name:{genreName}</p>
      <div className="w-full flex flex-col gap-10  items-center justify-center ">
        <div className="flex gap-[16px] justify-between  w-[1280px] ">
          <div className="w-[307px] flex flex-wrap">
            <GenreList />
          </div>
          <div className="w-[806px] flex-wrap  gap-3 justify-center flex">
            {movies.results?.splice(0, 12).map((movie: MovieType) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                imgclassname="w-full h-[244px]"
                containercss="w-[165px] h-[331px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
