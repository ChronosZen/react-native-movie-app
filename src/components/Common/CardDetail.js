import { Text, View, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Button } from "react-native-paper";
export default CardDetail = ({ movie }) => {
  let title, popularity, releaseDate, image, id;

  if (movie.known_for) {
    title = movie?.title ? movie.title : movie.name;
    overview = movie.known_for[0]?.overview;
    popularity = movie?.known_for?.[0]?.popularity;
    releaseDate = movie?.known_for?.[0]?.release_date;
    id = movie?.known_for?.[0]?.id;
    image =
      movie.known_for?.[0]?.poster_path ?? movie.known_for?.[0]?.backdrop_path;
  } else {
    title = movie.title ? movie.title : movie.name;
    overview = movie?.overview;
    popularity = movie?.popularity;
    releaseDate = movie?.release_date;
    id = movie.id;
    image = movie?.poster_path ? movie.poster_path : movie.backdrop_path;
  }
  const mode = releaseDate ? "movie" : "tv";

  const router = useRouter();
  return (
    <View style={styles.movieItem}>
      <Image
        style={{ width: 100, height: 100, marginRight: 16 }}
        source={{
          uri: `https://image.tmdb.org/t/p/original${image}`,
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text>Popularity: {popularity}</Text>
        {movie.release_date ? <Text>Release Date: {releaseDate}</Text> : <></>}
        <Button
          mode="contained"
          buttonColor="#8D7B68"
          onPress={() => {
            router.push({
              pathname: `/moviedetail/MovieDetail`,
              params: {
                id,
                mode,
              },
            });
          }}
          style={styles.button}>
          More Details
        </Button>
      </View>
    </View>
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
  button: {
    marginTop: 15,
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
