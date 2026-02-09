import { axiosInstance } from "@/lib/utils";
import { MovieType } from "@/lib/types";

export const getMovieById = async (id: string): Promise<MovieType | null> => {
  try {
    const response = await axiosInstance.get<MovieType>(
      `/movie/${id}?language=en-US`,
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch movie by ID:", error);
    return null;
  }
};
