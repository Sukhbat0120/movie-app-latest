import { axiosInstance } from "@/lib/utils";
import { MovieType } from "@/lib/types";

export const getGenres = async (genreId: string, page: string) => {
  try {
    const response = await axiosInstance.get(
      `/discover/movie?language=en&with_genres=${genreId}&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch movie by ID:", error);
  }
};
