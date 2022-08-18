import { toaster } from "evergreen-ui";
import { useState } from "react";
import Header from "../../../layouts/header";
import { QueryGetMovies, QueryGetSingleMovie } from "../../../services/useQuery";
import { loading } from "../../svg/animation";

const HomeComponent = () => {

    const [url, setURL] = useState([]);

    const { data, error, isFetching, isLoading, isError } = QueryGetMovies();

    const { data: singleMovie } = QueryGetSingleMovie(url);

    console.log(singleMovie?.data?.characters);

    const listOfMovies = data?.data?.results;

    // console.log(listOfMovies);

    if (isError) {
        toaster.danger(error);
    };

    console.log(url);

    return (
        <div className="wrapper">
            {isLoading ? loading : 
            <>
                <Header />
                <label htmlFor="movies">Select a movie:</label>
                <select name="movies" id="movies" onChange={(e) => setURL(e.target.value)}>
                    <option value="" disabled selected>Select your movie</option>
                    {listOfMovies?.map((res) => (
                        <option value={[res?.url]} key={res?.episode_id}>
                            {res?.title}
                        </option>
                    ))}
                </select>
            </>
            }
        </div>
    )
};
 
export default HomeComponent;
