import { axiosInstance } from "@/lib/utils";
import { Navigation } from "@/components/navbar/Navigation";
import { GenreEffect } from "@/components/genre/GenreEffect";

type SearchPageProps = {
  searchParams: Promise<{
    query: string;
    page?: string;
  }>;
};

const page = async ({ searchParams }: SearchPageProps) => {
  const params = await searchParams;
  const { query, page = "1" } = params;

  const getMovies = async () => {
    if (!query) return { results: [] };

    const response = await axiosInstance.get(
      `/search/movie?query=${encodeURIComponent(
        query
      )}&language=en-US&page=${page}`
    );

    return response.data;
  };

  const movies = await getMovies();

  return (
    <div className="items-center">
      <Navigation />

      <GenreEffect
        movies={movies}
        genreName={`Search result: "${query}"`}
      />
    </div>
  );
};

export default page;
