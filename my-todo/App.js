import {StatusBar} from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, {useState} from "react";
import Header from "./components/Header";
import TodoITem from "./components/TodoITem";
import TodoForm from "./components/TodoForm";

export default function App() {
  const [todoItem, setTodoItem] = useState([
    {itemName: "Task 1", id: 1},
    {itemName: "Task 2", id: 2},
    {itemName: "Task 3", id: 3},
    {itemName: "Task 4", id: 4},
  ]);

  function handleTap(itemId) {
    setTodoItem((previousTodo) => {
      return previousTodo.filter((todo) => todo.id != itemId);
    });
  }

  function insertItem(todoName) {
    if (todoName.length < 3) {
      Alert.alert("opss", "Too Small (Need more than 4 char)", [
        {text: "Okay!", onPress: () => {}},
        {text: "Not Okay!", onPress: () => {}},
      ]);
      return;
    }
    setTodoItem((prev) => {
      return [{itemName: todoName, id: Math.random().toString()}, ...prev];
    });
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <View style={styles.content}>
          <TodoForm onClickAdd={insertItem} />
          <View style={styles.listContainer}>
            <FlatList
              data={todoItem}
              renderItem={({item}) => {
                return <TodoITem todo={item} onClickItem={handleTap} />;
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {flex: 1},
  listContainer: {
    flex: 1,
    padding: 16,
    marginTop: 16,
  },
});
