import { StyleSheet, Text, View } from "react-native";
import CardDetail from "./CardDetail";
import { Loading } from "./Loading";

export default ItemCard = ({ movieData, startNumber }) => {
  const movieSlice =
    (startNumber + 1) % 2 === 0
      ? movieData.slice(10, 19)
      : movieData.slice(0, 9);
  return (
    <View style={styles.main}>
      {movieSlice.length > 0 ? (
        movieSlice.map((movie, index) => (
          <CardDetail movie={movie} key={index} />
        ))
      ) : (
        <Loading />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
  },
});
