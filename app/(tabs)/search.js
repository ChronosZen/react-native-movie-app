import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Searchbar, Button } from "react-native-paper";
import { Dropdown } from "../../src/components/Common/Dropdown";
import { useEffect, useState } from "react";
import fetchSearch from "../../src/services/searchApi";
import ItemCard from "../../src/components/Common/ItemCard";
import { Pagination } from "../../src/components/Common/Pagination";
const dropdownList = [
  { label: "Movie", value: "movie" },
  { label: "Multi", value: "multi" },
  { label: "TV", value: "tv" },
];

export default function Page() {
  const [filterMode, setFilterMode] = useState(dropdownList[0].value);
  const [movieData, setMovieData] = useState([]);
  const [startNumber, setStartNumber] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [query, setQuery] = useState("");
  const [apiPage, setApiPage] = useState(1);
  useEffect(() => {
    const loadMovies = async () => {
      try {
        const movies = await fetchSearch(filterMode, "search", query, apiPage);
        setMovieData(movies);
      } catch (error) {
        console.log(error);
      } finally {
        setSearchQuery("");
      }
    };

    loadMovies();
  }, [query]);

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Text>
          Search Movie/TV Show Name
          <Text style={{ color: "red" }}>*</Text>
        </Text>
        <Searchbar
          style={styles.search}
          placeholder="i.e Jame bond, CSI"
          placeholderTextColor="gray"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>
      <Text style={styles.searchText}>
        Choose Search Type
        <Text style={{ color: "red" }}>*</Text>
      </Text>
      <View style={styles.dropdownButtonContainer}>
        <Dropdown
          dropdownList={dropdownList}
          filterMode={filterMode}
          setFilterMode={setFilterMode}
        />
        <Button
          mode="contained"
          buttonColor="#8D7B68"
          onPress={() => {
            setQuery(searchQuery);
          }}>
          Search
        </Button>
      </View>
      <ScrollView style={styles.scrollView}>
        {query.length > 0 ? (
          <>
            <ItemCard movieData={movieData} startNumber={startNumber} />
            <Pagination
              startNumber={startNumber}
              setStartNumber={setStartNumber}
              setApiPage={setApiPage}
            />
          </>
        ) : (
          <View style={styles.main}>
            <Text>Please initiate the search</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  searchBarContainer: {
    marginTop: 20,
  },
  dropdownButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  search: {
    backgroundColor: "#F1DEC9",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  searchText: {
    marginTop: 10,
  },
});
