import { Text } from "react-native-paper";
import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";

const MovideDetailPage = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Movie Detail Page {id}</Text>
    </View>
  );
};

export default MovideDetailPage;
