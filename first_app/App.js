import {StatusBar} from "expo-status-bar";
import React, {useState} from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [totalTask, settotalTask] = useState([]);
  const [task, settask] = useState("");

  function handleTextField(task) {
    settask(task);
  }
  function btnPressHandle() {
    settotalTask([...totalTask, task]);
    console.log(totalTask);
  }

  return (
    <SafeAreaView style={style.main}>
      <TextInput
        placeholder="Hello World"
        style={style.inputField}
        value={task}
        onChangeText={handleTextField}
      />
      <Button title="Add" style={style.btn} onPress={btnPressHandle} />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  main: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputField: {
    padding: 14,
    borderWidth: 2,
    borderColor: "blue",
    marginRight: 20,
    //width: "80%",
    flex: 1,
  },
  btn: {
    padding: 20,
    flex: 1,
  },
});
