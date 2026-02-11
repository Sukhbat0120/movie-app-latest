import { getMovies } from "@/lib/api/getMovies";
import { MovieCard } from "@/components/movielist/MovieCard";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;
  const movies = await getMovies(category);

  return (
    <main className="px-6 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {movies.results.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            containercss=""
            imgclassname=""
          />
        ))}
      </div>
    </main>
  );
}
