import { StyleSheet, Text, View } from "react-native";
import CardDetail from "./CardDetail";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

export default ItemCard = ({ movieData }) => {
  return (
    <View style={styles.main}>
      {movieData.length > 0 ? (
        movieData.map((movie, index) => (
          <CardDetail movie={movie} key={index} />
        ))
      ) : (
        <ActivityIndicator animating={true} color="#A4907C" />
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
