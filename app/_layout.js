import { Stack } from "expo-router";
import "../global.css";

export default Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor: "#8D7B68" },
        headerTitleStyle: { color: "white" },
        headerBackTitle: "Back to List",
      }}>
      <Stack.Screen
        name="(tabs)"
        options={{ headerTitle: "Movie App", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="moviedetail/MovieDetail"
        options={({ route }) => ({
          headerTitle: route.params.title || "Movie Detail",
          headerTitleAlign: "center",
        })}
      />
    </Stack>
  );
};
