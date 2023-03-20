import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Posts } from "../components/Posts";
import { CommentsScreen } from "./CommentsScreen";
import { MapScreen } from "./MapScreen";

const Stack = createStackNavigator();

export const PostsScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Posts"
        component={Posts}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Comments" component={CommentsScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
};
