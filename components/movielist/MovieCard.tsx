"use client";
import { MovieType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

import StarIcon from "../StarIcon";
import Image from "next/image";
interface Props {
  movie: MovieType;
  containercss: string;
  imgclassname: string;
}
export const MovieCard = ({ movie, containercss, imgclassname }: Props) => {
  const { title, vote_average, poster_path, id } = movie;

  console.log(movie);

  const router = useRouter();
  const HandleClick = () => {
    router.push(`/detail/${id}`);
  };
  return (
    <div
      onClick={HandleClick}
      className={cn(
        "overflow-hidden rounded-2xl hover:shadow-2xl  duration-100",
        containercss,
      )}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={`Poster of ${title}`}
        width={40}
        height={240}
        className={cn(imgclassname)}
      />
      <div className="bg-gray-300 h-50 p-2 ">
        <div className="flex items-center  text-black gap-2">
          <p className="flex items-center">
            <StarIcon />
            <span>{vote_average.toFixed(1)}</span>/10
          </p>
        </div>
        <p className="text-black  text-sm font-bold">{title}</p>
      </div>
    </div>
  );
};
