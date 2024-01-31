import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import fetchSingle from "../../src/services/detailApi";
import { useLocalSearchParams } from "expo-router";
import { Loading } from "../../src/components/Common/Loading";
const MovieDetail = () => {
  const params = useLocalSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState({
    title: "",
    overview: "",
    popularity: "",
    releaseDate: "",
    image: "",
  });
  const { id, mode } = params;

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setIsLoading(true);
        const data = await fetchSingle(id, mode);
        setMovie({
          title: data.title,
          overview: data.overview,
          popularity: data.popularity,
          releaseDate: data.release_date,
          image: data.poster_path,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadMovies();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <View style={styles.movieItem}>
          <Text style={styles.title}>{movie.title}</Text>
          <Image
            style={styles.image}
            source={{
              uri: `https://image.tmdb.org/t/p/original${movie.image}`,
            }}
          />
          <Text>{movie.overview}</Text>
          <View style={styles.subview}>
            <Text>Popularity: {movie.popularity} </Text>
            {movie.releaseDate ? (
              <Text>| Release Date: {movie.releaseDate}</Text>
            ) : null}
          </View>
        </View>
      )}
    </>
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
