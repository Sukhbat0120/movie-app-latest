import { getMovieById } from "@/lib/api/getMovieByid";
import { MovieDetail } from "@/components/moviedetail/MovieDetail";
import { getSimilarMovie } from "@/lib/api/getSimilarMovies";
import { SimilarMovies } from "@/components/moviedetail/SimiliarMovies";
import { Navigation } from "@/components/navbar/Navigation";
import { getCredits } from "@/lib/api/getCredits";
import { getTrailer } from "@/lib/api/getTrailer";
import { Footer } from "@/components/footer/Footer";

async function DetailPage({ params }: { params: { id: string } }) {
  const movie = await getMovieById(params.id);
  const similarMovieData = await getSimilarMovie(params.id);
  const credits = await getCredits(params.id);
  const trailerUrl = await getTrailer(params.id);

  if (!movie) {
    return <div className="text-white">Movie not found</div>;
  }

  return (
    <div>
      <Navigation />
      <div className="flex flex-col gap-10">
        <MovieDetail movie={movie} credits={credits} trailerUrl={trailerUrl} />

        {similarMovieData && (
          <SimilarMovies
            text="More Like This"
            movies={similarMovieData.results}
          />
        )}

        <Footer />
      </div>
    </div>
  );
}

export default DetailPage;
