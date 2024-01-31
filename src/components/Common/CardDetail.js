import { Text, View, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Button } from "react-native-paper";
export default CardDetail = ({ movie }) => {
  const title = movie.title ? movie.title : movie.name;
  const router = useRouter();
  return (
    <View style={styles.movieItem}>
      <Image
        style={{ width: 100, height: 100, marginRight: 16 }}
        source={{
          uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text>Popularity: {movie.popularity}</Text>
        {movie.release_date ? (
          <Text>Release Date: {movie.release_date}</Text>
        ) : (
          <></>
        )}
        <Button
          mode="contained"
          buttonColor="#8D7B68"
          onPress={() =>
            router.push({
              pathname: `/moviedetail/MovieDetail`,
              params: {
                title: title,
                overview: movie.overview,
                popularity: movie.popularity,
                releaseDate: movie.release_date,
                image: movie.poster_path,
              },
            })
          }
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
