import { useQuery } from "react-query";
import { getCharacters, getMovies, getSingleMovie } from "./endpoints";

export const QueryGetMovies = () => useQuery("movies", () => getMovies());
export const QueryGetSingleMovie = (url) => useQuery(['movie', url], () => getSingleMovie(url), { enabled: !!url });
export const QueryGetCharacters = (charURL) => useQuery(['movie', charURL], () => getCharacters(charURL), { enabled: !!charURL });