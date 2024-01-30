import { Text, View, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
export default CardDetail = ({ movie }) => {
  return (
    <Link href="app/movidedetail/[id]">
      <View key={movie.title} style={styles.movieItem}>
        <Image
          style={{ width: 100, height: 100, marginRight: 16 }}
          source={{
            uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
          }}
        />
        <View>
          <Text>{movie.title}</Text>
          <Text>Popularity: {movie.popularity}</Text>
          <Text>Release Date: {movie.release_date}</Text>
        </View>
      </View>
    </Link>
  );
};
const styles = StyleSheet.create({
  movieItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#C8B6A6",
    paddingBottom: 10,
  },
});
