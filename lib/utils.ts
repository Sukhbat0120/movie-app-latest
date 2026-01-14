import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";
import { GenreType } from "./types";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const getImageUrl = (imagePath: string, width: string = "w500") => {
  return `https://image.tmdb.org/t/p/${width}${imagePath}`;
};

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",

  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
  },
});

export const credits = axios.create({
  baseURL: "https://api.themoviedb.org/3",

  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
  },
});
export const movieGenres: GenreType[] = [
  { text: "Action", id: 28 },
  { text: "Comedy", id: 35 },
  { text: "Adventure", id: 12 },
  { text: "Crime", id: 80 },
  { text: "Documentary", id: 99 },
  { text: "Drama", id: 18 },
  { text: "Romance", id: 10749 },
  { text: "Thriller", id: 53 },
  { text: "War", id: 10752 },
  { text: "Western", id: 37 },
];
