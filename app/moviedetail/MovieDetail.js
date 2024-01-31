import { View, Image, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

const MovieDetail = () => {
  const params = useLocalSearchParams();

  const { title, overview, popularity, releaseDate, image } = params;
  let overview2 = decodeURIComponent(overview);
  return (
    <View style={styles.movieItem}>
      <Text style={styles.title}>{title}</Text>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/original${image}`,
        }}
      />
      <Text>{overview2}</Text>
      <View style={styles.subview}>
        <Text>Popularity: {popularity} </Text>
        {releaseDate ? <Text>| Release Date: {releaseDate}</Text> : <></>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  movieItem: {
    flex: 1,
    marginHorizontal: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
    marginBottom: 16,
  },
  subview: {
    flexDirection: "row",
  },
});

export default MovieDetail;
