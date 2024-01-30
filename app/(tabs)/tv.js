import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { Dropdown } from "../../src/components/Common/Dropdown";
const dropdownList = ["Airing today", "Popular", "On the air", "Top rated"];
export default TV = () => {
  const [filterMode, setFilterMode] = useState(dropdownList[0]);
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Dropdown
          dropdownList={dropdownList}
          filterMode={filterMode}
          setFilterMode={setFilterMode}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
