import { axiosInstance } from "@/lib/utils";
import { MovieType } from "@/lib/types";

export const getSimilarMovie = async (id: string) => {
  try {
    const response = await axiosInstance.get(
      `/movie/${id}/similar?language=en-US`
    );
    return response.data.results;
  } catch (error) {
    console.error("Failed to fetch movie by ID:", error);
  }
};
