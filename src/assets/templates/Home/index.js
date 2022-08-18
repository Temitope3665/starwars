import Header from "../../../layouts/header";
import { QueryGetMovies } from "../../../services/useQuery";
import { loading } from "../../svg/animation";

const HomeComponent = () => {
    const { data, error, isFetching, isLoading, isError } = QueryGetMovies();

    const listOfMovies = data?.data?.results;

    console.log(error);

    console.log(isError);

    return (
        <div className="wrapper">
            {isLoading ? loading : 
            <>
                <Header />
                <label htmlFor="movies">Select a movie:</label>
                <select name="movies" id="movies">
                    <option value="" disabled selected>Select your movie</option>
                    {listOfMovies?.map((res) => (
                        <option value="volvo" key={res?.episode_id}>
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
