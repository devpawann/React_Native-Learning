"use strict";
import {StatusBar} from "expo-status-bar";
import React, {useState} from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import ListItem from "./components/ListItem";
import InputArea from "./components/InputArea";

export default function App() {
  const [totalTask, settotalTask] = useState([]);
  const [showModel, setshowModel] = useState(false);

  function btnPressHandle(task) {
    settotalTask([...totalTask, {key: Math.random().toString(), value: task}]);
    console.log(totalTask);
  }

  function removeItem(taskId) {
    let newTaskList = totalTask.filter(function (task) {
      return task.key !== taskId;
    });
    console.log(newTaskList);
    settotalTask(newTaskList);
  }

  return (
    <SafeAreaView>
      <Button title="Add new Task" onPress={() => setshowModel(true)} />
      <InputArea onAddGoal={btnPressHandle} showModel={showModel} />
      <FlatList
        style={style.list}
        data={totalTask}
        renderItem={(itemData) => (
          <ListItem
            id={itemData.item.key}
            title={itemData.item.value}
            onPressDelete={removeItem}
          />
        )}
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  list: {
    padding: 20,
    marginBottom: 20,
  },
});
