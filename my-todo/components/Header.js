import {StyleSheet, Text, View} from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={style.header}>
      <Text style={style.title}>Header</Text>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 40,
    backgroundColor: "coral",
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
