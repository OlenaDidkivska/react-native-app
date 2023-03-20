import React from "react";
import { StyleSheet } from "react-native";
import { PostsScreen } from "./PostsScreen";

export const HomeScreen = ({ navigation }) => {
    console.log('navigation', navigation);
    return (
        <PostsScreen/>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})