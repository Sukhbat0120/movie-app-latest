import { axiosInstance, credits } from "@/lib/utils";
import { GenreEffect } from "@/components/genre/GenreEffect";
import { Navigation } from "@/components/navbar/Navigation";
type GenrePageProps = {
  searchParams: Promise<{ genreId: string; genreName: string; page?: string }>;
};
const page = async ({ searchParams }: GenrePageProps) => {
  const params = await searchParams;
  const { genreId, genreName, page = 1 } = params;

  const getMovies = async () => {
    const response = await axiosInstance.get(
      `/discover/movie?language=en&with_genres=${genreId}&page=${page}`
    );

    return response.data;
  };
  const movies = await getMovies();
  return (
    <div className="items-center">
      <Navigation />

      <GenreEffect movies={movies} genreName={genreName} />
    </div>
  );
};

export default page;
