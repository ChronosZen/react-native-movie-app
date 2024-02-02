import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Dropdown } from "../../src/components/Common/Dropdown";
import { useEffect, useState } from "react";
import fetchMovies from "../../src/services/movieApi";
import ItemCard from "../../src/components/Common/ItemCard";
import { Loading } from "../../src/components/Common/Loading";
import { Pagination } from "../../src/components/Common/Pagination";
const dropdownList = [
  { label: "Now Playing", value: "now_playing" },
  { label: "Popular", value: "popular" },
  { label: "Top rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];

export default function Page() {
  const [filterMode, setFilterMode] = useState(dropdownList[0].value);
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [startNumber, setStartNumber] = useState(0);
  const [apiPage, setApiPage] = useState(1);
  useEffect(() => {
    const loadMovies = async () => {
      try {
        setIsLoading(true);
        const movies = await fetchMovies(filterMode, "movie", apiPage);
        setMovieData(movies.results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    loadMovies();
  }, [filterMode, apiPage]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView style={styles.scrollView}>
          <View style={styles.main}>
            <Dropdown
              dropdownList={dropdownList}
              filterMode={filterMode}
              setFilterMode={setFilterMode}
            />
          </View>
          <ItemCard
            movieData={movieData}
            startNumber={startNumber}
            key={apiPage}
          />
          <Pagination
            startNumber={startNumber}
            setStartNumber={setStartNumber}
            setApiPage={setApiPage}
          />
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 20,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
