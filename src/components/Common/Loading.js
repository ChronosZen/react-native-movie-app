import { StyleSheet, View, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";
export const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator animating={true} color="#A4907C" size="large" />
      <Text>Waiting for the result</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
