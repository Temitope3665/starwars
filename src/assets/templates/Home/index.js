import Header from "../../../layouts/header";
import { QueryGetMovies } from "../../../services/useQuery";

const HomeComponent = () => {
    const { data, isLoading, isFetching } = QueryGetMovies();

    console.log(data);

    return (
        <div className="wrapper">
            <Header />
            <label htmlFor="movies">Select a movie:</label>
            <select name="movies" id="movies">
                <option value="volvo">Volvo</option>
                <option value="toyota">Toyota</option>
            </select>
        </div>
    )
};
 
export default HomeComponent;
