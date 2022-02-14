import {StyleSheet, Text, View, TextInput, Button} from "react-native";
import React, {useState} from "react";

export default function TodoForm({onClickAdd}) {
  const [todoName, setTodoName] = useState("");

  function textChangeHandler(text) {
    setTodoName(text);
  }

  return (
    <View style={style.root}>
      <TextInput
        style={style.todoForm}
        placeholder="Enter Todo..."
        value={todoName}
        onChangeText={textChangeHandler}
      />
      <View style={style.todoBtn}>
        <Button
          title="Add"
          style={style.btnAdd}
          color="coral"
          onPress={() => onClickAdd(todoName)}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  todoForm: {
    flex: 4,
    borderWidth: 2,
    borderColor: "coral",
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
  },
  todoBtn: {
    flex: 1,
    padding: 8,
  },
});
