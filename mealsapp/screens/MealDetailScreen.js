import {View, Text, StyleSheet} from "react-native";
import React from "react";

export default function MealDetailScreen({navigation, route}) {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text style={styles.root}>{route.params.mealId}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {color: "#fff", fontSize: 24},
});
