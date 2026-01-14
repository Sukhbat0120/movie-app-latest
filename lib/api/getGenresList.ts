// import { axiosInstance } from "@/lib/utils";
// import { MovieType } from "@/lib/types";

// export const getGenreList = async () => {
//   try {
//     const response = await axiosInstance.get(` /genre/movie/list?language=en`);
//     return response.data;
//   } catch (error) {
//     console.error("Failed to fetch movie by ID:", error);
//   }
// };
import { axiosInstance } from "@/lib/utils";

export const getGenreList = async () => {
  try {
    const response = await axiosInstance.get(
      "/genre/movie/list?language=en-US"
    );
    return response.data.genres;
  } catch (error) {
    console.error("Failed to fetch genres:", error);
    return [];
  }
};
