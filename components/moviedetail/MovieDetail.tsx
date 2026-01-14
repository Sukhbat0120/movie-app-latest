import { MovieDetailProps } from "@/lib/types";
import { TrailerModals } from "../movielist/TrailerModal";

export const MovieDetail = ({
  movie,
  credits,
  trailerUrl,
}: MovieDetailProps) => {
  return (
    <div className="flex mt-20 flex-col gap-6 justify-center items-center">
      {/* Header */}
      <div className="flex w-[1080px] justify-between h-[72px]">
        <div>
          <h1 className="text-2xl font-bold text-black">{movie.title}</h1>
        </div>
        <div className="text-right">
          <h2 className="font-semibold text-black">Rating</h2>
          <div className="flex items-center gap-1">
            <img src="/star.svg" alt="star" />
            <p className="text-black">
              <span>{movie.vote_average}</span>/10
            </p>
          </div>
          <p className="text-sm text-gray-500">{movie.vote_count} votes</p>
        </div>
      </div>

      {/* Poster + Backdrop */}
      <div className="flex gap-4">
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-[290px] h-[428px]"
        ></div>

        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "760px",
            height: "428px",
          }}
        >
          <div className="mt-[370px] ml-5">
            <div className="flex gap-2 items-center">
              <TrailerModals
                trailerUrl={trailerUrl}
                buttoncss="rounded-full w-[40px] h-[40px]"
                text="📽️"
              />
              <p className="pt-2 text-black">Play trailer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview + Credits */}
      <div className="flex flex-col gap-3 w-[1070px]">
        <p className="w-full text-black">{movie.overview}</p>

        <div className="flex flex-col gap-1 text-black">
          <div className="flex gap-2">
            <span className="font-semibold">Director:</span>
            <span>{credits.director}</span>
          </div>
          <div className="flex gap-5">
            <span className="font-semibold">Writer:</span>
            <span>{credits.writers}</span>
          </div>
          <div className="flex gap-7">
            <span className="font-semibold">Stars:</span>
            <span>{credits.stars}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
