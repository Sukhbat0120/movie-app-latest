import { getMovies } from "@/lib/api/getMovies";
import { MovieCard } from "@/components/movielist/MovieCard";

type Props = {
  params: { category: string };
};

export default async function CategoryPage({ params }: Props) {
  const { category } = params;
  const movies = await getMovies(category);
  return (
    <main className="px-6 py-10">
      {/* <h1 className="text-2xl font-bold text-white mb-6 capitalize">
        {category}
      </h1> */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {movies.results.map((movie: any) => (
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
