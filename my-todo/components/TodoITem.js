import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";
import {MaterialIcons} from "@expo/vector-icons";

export default function TodoITem({todo, onClickItem}) {
  return (
    <TouchableOpacity onPress={() => onClickItem(todo.id)}>
      <View style={style.item}>
        <MaterialIcons
          name="delete"
          size={24}
          color={"#333"}
          style={style.icon}
        />
        <Text style={style.itemTitle}>{todo.itemName}</Text>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  item: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    borderColor: "#bbb",
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  itemTitle: {
    color: "black",
  },
  icon: {marginRight: 16},
});
