import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
const { Navigator } = createMaterialTopTabNavigator();
export const MaterialTopTabs = withLayoutContext(Navigator);

export default TabsLayout = () => {
  return (
    <MaterialTopTabs>
      <MaterialTopTabs.Screen name="index" options={{ title: "Movies" }} />
      <MaterialTopTabs.Screen name="search" options={{ title: "Search" }} />
      <MaterialTopTabs.Screen name="tv" options={{ title: "TV" }} />
    </MaterialTopTabs>
  );
};
