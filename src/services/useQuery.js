import { useQuery } from "react-query";
import getMovies from "./endpoints";

export const QueryGetMovies = () => useQuery("movies", () => getMovies());