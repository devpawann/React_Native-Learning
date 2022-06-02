import {View, Text, StyleSheet, FlatList} from 'react-native'
import React, {useEffect} from 'react'
import {CATEGORIES, MEALS} from "../data/dummy-data";
import ItemMealTile from "../components/ItemMealTile";

export default function MealsList({navigation, route}) {
    const mealID = route.params.mealId

    const selectedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(mealID) >= 0
    })


    useEffect(() => {
        const category = CATEGORIES.find((cat) => cat.id === mealID);
        navigation.setOptions({title: category.title})
    }, [mealID, navigation])

    function renderMealList(item) {
        return <ItemMealTile meal={item.item}/>
    }

    return (
        <View>
            <FlatList data={selectedMeals} renderItem={renderMealList} keyExtractor={(item) =>
                item.id
            }/>
        </View>
    )
}
const styles = StyleSheet.create({})