import { getMovies } from "@/lib/api/getMovies";
import { MovieCard } from "@/components/movielist/MovieCard";
import { MovieType } from "@/lib/types";

type Props = {
  params: {
    category: string;
  };
};

export default async function CategoryPage({ params }: Props) {
  const { category } = params;

  const movies: MovieType[] = await getMovies(category);

  return (
    <main className="px-6 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {movies.map((movie) => (
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
