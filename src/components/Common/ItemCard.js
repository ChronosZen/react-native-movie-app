import { StyleSheet, Text, View } from "react-native";
import CardDetail from "./CardDetail";
import { Loading } from "./Loading";

export default ItemCard = ({ movieData }) => {
  return (
    <View style={styles.main}>
      {movieData.length > 0 ? (
        movieData.map((movie, index) => (
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
