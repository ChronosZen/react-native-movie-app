import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Dropdown } from "../../src/components/Common/Dropdown";
import { useEffect, useState } from "react";
import fecthTV from "../../src/services/tvApi";
import ItemCard from "../../src/components/Common/ItemCard";
import { ActivityIndicator } from "react-native-paper";
const dropdownList = [
  { label: "Airing Today", value: "airing_today" },
  { label: "Popular", value: "popular" },
  { label: "Top rated", value: "top_rated" },
  { label: "On The Air", value: "on_the_air" },
];

export default function Page() {
  const [filterMode, setFilterMode] = useState(dropdownList[0].value);
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setIsLoading(true);
        const movies = await fecthTV(filterMode);
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
