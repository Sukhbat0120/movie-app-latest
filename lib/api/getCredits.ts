import { axiosInstance } from "@/lib/utils";

export const getCredits = async (id: string) => {
  try {
    const response = await axiosInstance.get(
      `/movie/${id}/credits?language=en-US`
    );
    const data = response.data;

    const director =
      data.crew.find((c: any) => c.job === "Director")?.name ?? "N/A";

    const writers =
      data.crew
        .filter((c: any) => c.job === "Writer" || c.job === "Screenplay")
        .map((c: any) => c.name)
        .join(", ") || "N/A";

    const stars =
      data.cast
        .slice(0, 5)
        .map((c: any) => c.name)
        .join(", ") || "N/A";

    return { director, writers, stars };
  } catch (error) {
    console.error("Failed to fetch credits:", error);
    return { director: "N/A", writers: "N/A", stars: "N/A" };
  }
};
