import {View, Text, StyleSheet, Button} from "react-native";
import React, {useEffect} from "react";
import IconButton from "../components/IconButton";

export default function MealDetailScreen({navigation, route}) {
    function onHeaderIconPress() {
        console.log("Hello")
    }

    useEffect(() => {
        return () => {
            navigation.setOptions({
                headerRight: () => {
                    return <IconButton onPressIcon={onHeaderIconPress} iconColor="white" iconName="star"/>
                }
            })
        };
    }, [navigation,onHeaderIconPress]);


    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={styles.root}>{route.params.mealId}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    root: {color: "#fff", fontSize: 24},
});
