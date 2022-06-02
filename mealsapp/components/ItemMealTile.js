import {View, Text, StyleSheet, Pressable} from "react-native";
import React from "react";
import {Image} from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function ItemMealTile({meal}) {
  const navigation = useNavigation();

  function goToDetail() {
    navigation.navigate("MealDetail", {mealId: meal.id});
  }

  return (
    <View style={styles.root}>
      <Pressable android_ripple={{color: "#fff"}} onPress={goToDetail}>
        <Image style={styles.imageMeal} source={{uri: meal.imageUrl}} />
        <Text style={styles.mealTitle}>{meal.title}</Text>
        <View style={styles.mealExtraDetail}>
          <Text style={styles.extraSingleInfo}>{meal.duration}m</Text>
          <Text style={styles.extraSingleInfo}>
            {meal.complexity.toUpperCase()}
          </Text>
          <Text style={styles.extraSingleInfo}>
            {meal.affordability.toUpperCase()}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  imageMeal: {width: "100%", height: 200, borderRadius: 8},
  root: {
    padding: 16,
    backgroundColor: "#ccc",
    marginBottom: 12,
    borderRadius: 16,
    marginHorizontal: 8,
  },
  mealTitle: {textAlign: "center", fontSize: 18},
  mealExtraDetail: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 8,
  },
  extraSingleInfo: {marginHorizontal: 8},
});
