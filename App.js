import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";

export default function App() {
  const routing = useRoute(true);

  console.log(routing);

  return <NavigationContainer>{routing}</NavigationContainer>;
}
