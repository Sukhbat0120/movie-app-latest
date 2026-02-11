"use client";
import { DescriptionBox } from "./DescriptionBox";
import { MovieType } from "@/lib/types";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
  movies: MovieType[];
};

export const CarouselContainer = ({ movies }: Props) => {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="w-full h-[800px]">
        {movies.slice(0, 10).map((movie) => (
          <CarouselItem
            key={movie.id}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="relative text-white flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10">
              <DescriptionBox
                texth1={movie.title}
                texth2="Now Playing:"
                textp={movie.overview}
                vo={movie.vote_average}
                trailerUrl={movie.trailerUrl}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
