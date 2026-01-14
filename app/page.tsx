import { MovieCardList } from "@/components/movielist/MovieCardList";
import { Navigation } from "@/components/navbar/Navigation";
import { getMovies } from "@/lib/api/getMovies";
import { CarouselContainer } from "@/components/movielist/CarouselContainer";
import { getGenreList } from "@/lib/api/getGenresList";
import { Loader } from "@/components/Loader";
import { Footer } from "@/components/footer/Footer";
async function Home() {
  const nowplayingMovieData = await getMovies("now_playing");
  const upcomingMovieData = await getMovies("upcoming");
  const popularMovieData = await getMovies("popular");
  const top_ratedMovieData = await getMovies("top_rated");
  const movie = await getGenreList();
  console.log(movie);

  return (
    <div className="bg-white mt-5 flex flex-col gap-20 max-w-[1440px] w-full mx-auto">
      <div className="justify-center  flex items-center">
        <Navigation />
      </div>
      <div className="mt-10 w-full flex flex-col ">
        <CarouselContainer movies={nowplayingMovieData} />
      </div>
      <MovieCardList
        text="Upcoming"
        movies={upcomingMovieData}
        category="upcoming"
      />
      <MovieCardList
        text="Popular"
        movies={popularMovieData}
        category="popular"
      />
      <MovieCardList
        text="Top rated"
        movies={top_ratedMovieData}
        category="now_playing"
      />
      <Footer/>
    </div>
  );
}
export default Home;
