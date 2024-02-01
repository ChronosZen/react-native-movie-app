import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

export const Dropdown = ({ dropdownList, filterMode, setFilterMode }) => {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={filterMode}
        onValueChange={(itemValue) => setFilterMode(itemValue)}
        style={styles.picker}>
        {dropdownList.map((item, index) => (
          <Picker.Item label={item.label} value={item.value} key={index} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  picker: {
    width: 200,
    height: 50,
    backgroundColor: "#F1DEC9",
    marginTop: 10,
    marginBottom: 20,
  },
});

export default Dropdown;
