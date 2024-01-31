import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Dropdown } from "../../src/components/Common/Dropdown";
import { useEffect, useState } from "react";
import fetchMovies from "../../src/services/movieApi";
import ItemCard from "../../src/components/Common/ItemCard";
import { ActivityIndicator } from "react-native-paper";

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
        const movies = await fetchMovies(filterMode);
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
        <View style={styles.loading}>
          <ActivityIndicator animating={true} color="#A4907C" size="large" />
          <Text>Waiting for the result</Text>
        </View>
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
