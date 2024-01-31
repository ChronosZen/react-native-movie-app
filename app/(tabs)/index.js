import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Dropdown } from "../../src/components/Common/Dropdown";
import { useEffect, useState } from "react";
import fetchMovies from "../../src/services/movieApi";
import ItemCard from "../../src/components/Common/ItemCard";
import { Loading } from "../../src/components/Common/Loading";

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

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setIsLoading(true);
        const movies = await fetchMovies(filterMode, "movie");
        setMovieData(movies);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    loadMovies();
  }, [filterMode]);

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
          <ItemCard movieData={movieData} />
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
