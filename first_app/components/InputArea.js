import React, {useState} from "react";
import {
  View,
  Button,
  StyleSheet,
  TextInput,
  Modal,
  SafeAreaView,
} from "react-native";

export default function InputArea(props) {
  const [task, settask] = useState("");

  function handleTextField(task) {
    settask(task);
  }

  return (
    <SafeAreaView>
      <Modal visible={props.showModel} animationType="slide">
        <View style={style.main}>
          <TextInput
            placeholder="Hello World"
            style={style.inputField}
            value={task}
            onChangeText={handleTextField}
          />
          <Button
            title="Add"
            style={style.btn}
            onPress={props.onAddGoal.bind(this, task)}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  main: {
    padding: 20,
    marginTop: 20,
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
