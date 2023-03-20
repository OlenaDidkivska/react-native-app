import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, ScrollView } from "react-native";

import { User } from "./User";
import { Publication } from "./Publications";
import { Button } from "react-native";

export const Posts = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <ScrollView>
          <User />
          <Publication navigation={navigation} />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start"
  },
  main: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 30
  }
});
