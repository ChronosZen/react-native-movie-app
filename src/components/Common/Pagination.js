import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

export const Pagination = ({ startNumber, setStartNumber, setApiPage }) => {
  return (
    <View style={styles.pagination}>
      <Text
        style={styles.size}
        onPress={() => {
          if (startNumber > 0) {
            setStartNumber(startNumber - 1);
            if (startNumber % 2 === 1) setApiPage(startNumber);
          }
        }}>
        &lt;
      </Text>
      <Text style={styles.size}>{startNumber + 1}</Text>
      <Text
        style={styles.size}
        onPress={() => {
          setStartNumber(startNumber + 1);
          if ((startNumber + 1) % 2 === 0) setApiPage(startNumber + 1);
        }}>
        &gt;
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pagination: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginVertical: 10,
  },
  size: {
    fontSize: 20,
    marginHorizontal: 10,
    width: 30,
    textAlign: "center",
    height: 30,
  },
});
