/* eslint-disable react-hooks/exhaustive-deps */
import { toaster } from "evergreen-ui";
import { useEffect, useState } from "react";
import Header from "../../layouts/header";
import {
  QueryGetMovies,
  QueryGetSingleMovie,
} from "../../services/useQuery";
import { loading } from "../../assets/svg/animation";
import { TableColumn } from "../../utils/variable/tableColumns";
import axios from "axios";
import { filterData } from "../../utils/variable/filterData";
import TableComp from "../../components/table/table";
import { capitalizeFirstLetter, findSum } from "../../utils/helpers";
import Footer from "../../layouts/footer";

const HomeComponent = (props) => {
  const [url, setURL] = useState();
  const [movieCharacters_, setMovieCharacters] = useState([]);
  const [filterMovieChar, setFilterMovieChar] = useState([]);
  const [characterLoading, setCharacterLoading] = useState(true);
  const { data, error, isLoading, isError } = QueryGetMovies();
  const { data: singleMovieData, isLoading: singleMovieLoading } =
    QueryGetSingleMovie(url);

  const listOfMovies = data?.data?.results;
  const singleMovie = singleMovieData?.data;
  const movieCharacters = singleMovie?.characters;
  const movieCharactersHeight = movieCharacters_.map((res) =>
    Number(res.height)
  );
  const filterMovieCharHeight = filterMovieChar.map((res) =>
    Number(res.height)
  );
  const totalHeights =
    filterMovieChar.length === 0
      ? findSum(movieCharactersHeight)
      : findSum(filterMovieCharHeight);

  const cData = async () => {
    await Promise.all(
      movieCharacters?.map(async (res) => {
        await axios
          .get(res)
          .then((res) => {
            setMovieCharacters((prevItems) => [
              ...prevItems,
              {
                name: res.data.name,
                gender: res.data.gender,
                height: res.data.height,
              },
            ]);
          })
          .catch((err) => toaster.danger("Error occurred" || err));
      })
    );
    setCharacterLoading(false);
  };

  useEffect(() => {
    cData();
  }, [movieCharacters]);

  const handleFilter = (e) => {
    const text = e.target.value;
    if (text === "Male") {
      const filteredCharacter = movieCharacters_.filter(
        (res) => capitalizeFirstLetter(res?.gender) === text
      );
      setFilterMovieChar(filteredCharacter);
    } else if (text === "Female") {
      const filteredCharacter = movieCharacters_.filter(
        (res) => capitalizeFirstLetter(res?.gender) === text
      );
      setFilterMovieChar(filteredCharacter);
    } else if (text === "N/a") {
      const filteredCharacter = movieCharacters_.filter(
        (res) => capitalizeFirstLetter(res?.gender) === text
      );
      setFilterMovieChar(filteredCharacter);
    } else {
      setFilterMovieChar(movieCharacters_);
    }
  };

  if (isError) {
    toaster.danger(error);
  }

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
            onChange={(e) => {
              setURL(e.target.value);
              setMovieCharacters([]);
            }}
            className="select-movies"
          >
            <option value="" disabled selected>
              Select your movie
            </option>
            {listOfMovies?.map((res) => (
              <option value={res?.url} key={res?.episode_id}>
                {res?.title}
              </option>
            ))}
          </select>
        </>
      )}

      {isLoading ? null : (
        <>
          {characterLoading || singleMovieLoading ? (
            loading
          ) : (
            <div className="table-wrapper">
              <label>Filter by:</label>
              <select
                name="movies"
                id="movies"
                className="filter-by"
                onChange={(e) => handleFilter(e)}
              >
                <option value="" disabled selected>
                  Filter by:
                </option>
                {filterData.map((res) => (
                  <option value={res} key={res}>
                    {res}
                  </option>
                ))}
              </select>

              <TableComp
                caption={singleMovie?.opening_crawl}
                data={
                  filterMovieChar.length === 0
                    ? movieCharacters_
                    : filterMovieChar
                }
                columns={TableColumn}
                totalCharacter={
                  filterMovieChar.length === 0
                    ? movieCharacters_.length
                    : filterMovieChar.length
                }
                sumOfHeight={totalHeights}
                heightToCm={totalHeights / 30.48}
                heightToInches={totalHeights / 2.54}
              />
            </div>
          )}
        </>
      )}

      <Footer />
    </div>
  );
};

export default HomeComponent;
