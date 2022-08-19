import { toaster } from "evergreen-ui";
import { useState } from "react";
import Table from "../../../components/table/table";
import Header from "../../../layouts/header";
import {
  QueryGetMovies,
  QueryGetSingleMovie,
} from "../../../services/useQuery";
import { loading } from "../../svg/animation";
import tableData from '../../../utils/variable/tableData.json';
import { TableColumn } from "../../../utils/variable/tableColumns";

const HomeComponent = () => {
  const [url, setURL] = useState([]);

  const { data, error, isFetching, isLoading, isError } = QueryGetMovies();

  const { data: singleMovie } = QueryGetSingleMovie(url);

  console.log(singleMovie?.data?.characters);

  const listOfMovies = data?.data?.results;

  // console.log(listOfMovies);

  if (isError) {
    toaster.danger(error);
  }

  console.log(url);

  return (
    <div className="wrapper">
      {isLoading ? (
        loading
      ) : (
        <>
          <Header />
          <label htmlFor="movies">Select a movie:</label>
          <select
            name="movies"
            id="movies"
            onChange={(e) => setURL(e.target.value)}
          >
            <option value="" disabled selected>
              Select your movie
            </option>
            {listOfMovies?.map((res) => (
              <option value={[res?.url]} key={res?.episode_id}>
                {res?.title}
              </option>
            ))}
          </select>
        </>
      )}

      <h1>Sortable table with React</h1>
      <Table
        caption="Developers currently enrolled in this course, column headers are sortable."
        data={tableData}
        columns={TableColumn}
      />
    </div>
  );
};

export default HomeComponent;
