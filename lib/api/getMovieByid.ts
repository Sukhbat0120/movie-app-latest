import { axiosInstance } from "@/lib/utils";
import { MovieType } from "@/lib/types";

export const getMovieById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/movie/${id}?language=en-US`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch movie by ID:", error);
  }
};
