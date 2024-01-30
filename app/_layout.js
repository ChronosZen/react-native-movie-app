import { Stack } from "expo-router";
export default Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor: "#8D7B68" },
        headerTitleStyle: { color: "white" },
      }}>
      <Stack.Screen
        name="(tabs)"
        options={{ headerTitle: "Movie App", headerTitleAlign: "center" }}
      />
    </Stack>
  );
};
