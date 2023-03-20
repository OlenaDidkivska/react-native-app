import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LoginScreen } from "./Screens/LoginScreen.jsx";
import { RegistrationScreen } from "./Screens/RegistrationScreen.jsx";
import { HomeScreen } from "./Screens/HomeScreen.jsx";
import { CreatePostsScreen } from "./Screens/CreatePostsScreen.jsx";
import { ProfileScreen } from "./Screens/ProfileScreen.jsx";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { PostsScreen } from "./Screens/PostsScreen.jsx";
import { RouterButton } from "./components/RouterButton.jsx";

const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HeaderTitle(text) {
  return <Text style={styled.title}>{text}</Text>;
}

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Registration">
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
      </AuthStack.Navigator>
    );
  }

  return (
    <Tab.Navigator
      backBehavior="history"
      initialRouteName="Posts"
      lazy="false"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "rgba(33, 33, 33, 0.8)",
        tabBarStyle: [
          {
            display: "flex",
            paddingHorizontal: 50,
            paddingTop: 10,
            paddingBottom: 10,
            height: 60
          },
          null
        ],
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: "rgba(0, 0, 0, 0.3)",
          backgroundColor: "#fff"
        },
        headerTitleAlign: "center"
      }}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerTitle: () => HeaderTitle("Публикации"),
          headerRight: () => (
            <RouterButton styles={{ marginRight: 36 }} screenName="Login" />
          ),
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name="grid-outline" size={24} color={color} />
          ),
          tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)"
        }}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          headerTitle: () => HeaderTitle("Cоздать публикацию"),
          headerLeft: () => <RouterButton screenName="Posts" />,
          tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)",
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name="add"
              style={styled.focusNav}
              size={24}
              color={color}
            />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Feather
              name="user"
              style={focused && styled.focusNav}
              size={24}
              color={color}
            />
          ),
          tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)"
        }}
      />
    </Tab.Navigator>
  );
};

const styled = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  },
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  focusNav: {
    width: 70,
    height: 40,
    justifyContent: "center",
    alignContent: "center",
    paddingVertical: 7,
    paddingHorizontal: 23,
    borderRadius: 20,
    backgroundColor: "#FF6C00",
    color: "#fff"
  },
  focused: {
    backgroundColor: "#FFF",
    color: "#FF6C00"
  },
  title: {
    fontWeight: "bold",
    color: "#212121",
    fontSize: 17
  },
  btn: {
    // width: 30,
    // height: 30,
    // borderRadius: 20,
    // backgroundColor: "#ffffff",
    // color: "#BDBDBD",
    // alignItems: "center",
    // justifyContent: "center"
    // marginHorizontal: 16,
  }
});
