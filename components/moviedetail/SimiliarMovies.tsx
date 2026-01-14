import { getSimilarMovie } from "@/lib/api/getSimilarMovies";
import { MovieCard } from "../movielist/MovieCard";
import { MovieType } from "@/lib/types";

type Props = {
  movies: MovieType[];
  text: string;
};
export const SimilarMovies = ({ movies, text }: Props) => {
  return (
    <div className="flex flex-col items-center gap-3 ">
      <div className="justify-between w-[1080px] flex">
        <h1 className="text-2xl  text-bold"> {text}</h1>
        <p>see more</p>
      </div>

      <div className="flex gap-10  flex-wrap">
        {movies.slice(0, 5).map((movie) => (
          <MovieCard
            imgclassname="w-[281px]"
            containercss="w-[190px] h-[372px]"
            movie={movie}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
};
