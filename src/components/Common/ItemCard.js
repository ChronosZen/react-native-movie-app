import { StyleSheet, Text, View } from "react-native";
import CardDetail from "./CardDetail";
export default ItemCard = ({ movieData }) => {
  return (
    <View style={styles.main}>
      {movieData.length > 0 ? (
        movieData.map((movie) => <CardDetail movie={movie} />)
      ) : (
        <Text>Loading...</Text>
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
