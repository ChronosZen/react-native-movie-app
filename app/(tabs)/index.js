import { StyleSheet, View, ScrollView } from "react-native";
import { Dropdown } from "../../src/components/Common/Dropdown";
import { useEffect, useState } from "react";
import fetchMovies from "../../src/services/movieApi";
import ItemCard from "../../src/components/Common/ItemCard";
const dropdownList = [
  { label: "Now Playing", value: "now_playing" },
  { label: "Popular", value: "popular" },
  { label: "Top rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];

export default function Page() {
  const [filterMode, setFilterMode] = useState(dropdownList[0].value);
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    const loadMovies = async () => {
      const movies = await fetchMovies(filterMode);
      setMovieData(movies);
      console.log(movies.length);
    };
    loadMovies();
  }, [filterMode]);

  return (
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
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 20,
  },
});
