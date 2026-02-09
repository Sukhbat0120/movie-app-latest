import { axiosInstance } from "@/lib/utils";
import { MovieType } from "@/lib/types";

type MovieResponse = {
  results: MovieType[];
};

export const getMovies = async (category: string): Promise<MovieResponse> => {
  const response = await axiosInstance.get<MovieResponse>(
    `/movie/${category}?language=en-US`,
  );
  return response.data;
};
