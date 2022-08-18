import { useQuery } from "react-query";
import { getMovies, getSingleMovie } from "./endpoints";

export const QueryGetMovies = () => useQuery("movies", () => getMovies());
export const QueryGetSingleMovie = (url) => useQuery(['movie', url], () => getSingleMovie(url), {
    enabled: !!url
});