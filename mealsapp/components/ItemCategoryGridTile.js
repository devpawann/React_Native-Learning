import {View, Text, StyleSheet, Pressable, Platform} from 'react-native'
import React from 'react'

export default function ItemCategoryGridTile({item,onPress}) {
    return (
        <View style={[styles.gridItem, {backgroundColor: item.color}]}>
            <Pressable onPress={onPress} style={styles.btnStyle} android_ripple={{color: "#ccc"}}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        borderRadius: 8,
        height: 150,
        elevation: 4,
        overflow: Platform.OS === "android" ? "hidden" : "visible"
    },
    btnStyle: {flex: 1},
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontStyle: "bold",
        fontSize: 18
    }

})