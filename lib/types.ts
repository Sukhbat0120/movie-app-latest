export type MovieType = {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  isLoading: boolean;
  trailerUrl:string ; 
};
export type GenreType = {
  text: string;
  id: number;
};
export type MovieDetailProps = {
  movie: MovieType;

  credits: {
    director: string;
    writers: string;
    stars: string[];
  };
  trailerUrl: string | null;
};
