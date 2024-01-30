import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
const { Navigator } = createMaterialTopTabNavigator();
export const MaterialTopTabs = withLayoutContext(Navigator);

export default TabsLayout = () => {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarActiveTintColor: "#8D7B68",
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
          textTransform: "capitalize",
        },
        tabBarIndicatorStyle: { backgroundColor: "#8D7B68", height: 3 },
      }}>
      <MaterialTopTabs.Screen name="index" options={{ title: "Movies" }} />
      <MaterialTopTabs.Screen
        name="search"
        options={{ title: "Search Results" }}
      />
      <MaterialTopTabs.Screen name="tv" options={{ title: "TV Shows" }} />
    </MaterialTopTabs>
  );
};
