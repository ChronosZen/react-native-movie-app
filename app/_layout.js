import { Stack } from "expo-router";
export default Layout = () => {
  return (
    <Stack screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen
        name="(tabs)"
        options={{ headerTitle: "Movie App", headerTitleAlign: "center" }}
      />
    </Stack>
  );
};
