import { axiosInstance } from "@/lib/utils";

type Video = {
  type: string;
  site: string;
  key: string;
};

export const getTrailer = async (id: string) => {
  if (!id) return null;

  try {
    const response = await axiosInstance.get(
      `/movie/${id}/videos?language=en-US`
    );

    const videos: Video[] = response.data?.results ?? [];

    const trailer =
      videos.find((v) => v.type === "Trailer" && v.site === "YouTube") ||
      videos.find((v) => v.type === "Teaser" && v.site === "YouTube");

    return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
  } catch (error) {
    console.error("Failed to fetch trailer:", error);
    return null;
  }
};
