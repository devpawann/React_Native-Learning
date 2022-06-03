import {View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons"

export default function IconButton({onPressIcon,iconName,iconSize,iconColor}) {
    return (
        <Pressable onPress={onPressIcon} style={({pressed})=>pressed?styles.pressed:null}>
            <Ionicons name={iconName} size={24} color={iconColor}/>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    pressed:{
        opacity:0.5,
    }
})