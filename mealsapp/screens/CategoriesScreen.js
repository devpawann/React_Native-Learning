import {View, Text, StyleSheet, FlatList} from 'react-native'
import React from 'react'
import {CATEGORIES} from "../data/dummy-data";
import ItemCategoryGridTile from "../components/ItemCategoryGridTile";


export default function CategoriesScreen({navigation}) {


    function renderCategoriesItem(item) {
        function pressHandler() {
            navigation.navigate("Meals List Screen",{mealId:item.item.id})
        }

        return <ItemCategoryGridTile item={item.item} onPress={pressHandler}/>
    }

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderCategoriesItem}
            numColumns={2}
            keyExtractor={(item) => {
                item.id
            }}
        />
    )
}
const styles = StyleSheet.create({})