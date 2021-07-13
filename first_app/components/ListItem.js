import React from "react";
import {View, Text, StyleSheet, TouchableNativeFeedback} from "react-native";

export default function ListItem(props) {
  return (
    <TouchableNativeFeedback onPress={props.onPressDelete.bind(this, props.id)}>
      <View style={style.listItem}>
        <Text style={style.listItemText}>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}
const style = StyleSheet.create({
  listItemText: {
    color: "#000000",
  },
  listItem: {
    marginVertical: 10,
    borderColor: "#000",
    borderWidth: 2,
    padding: 5,
    color: "#fff",
    backgroundColor: "#CAD5E2",
  },
});
