import React, { useState, useEffect } from "react";
import { Dimensions, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  FlatList
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { RouterButton } from "../components/RouterButton";

export const ProfileScreen = ({ navigation }) => {
  const [isAvatar, setIsAvatar] = useState(true);

  const changeAvatarVisibility = () => {
    setIsAvatar(!isAvatar);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/photo_bg.jpg")}
        >
          <View style={styles.wrapperPublication}>
            <View style={styles.avatar}>
              <Image
                style={{ borderRadius: 16 }}
                source={
                  isAvatar ? require("../assets/images/rectangle.jpg") : ""
                }
              />
              {isAvatar ? (
                <Octicons
                  style={{
                    ...styles.addRemoveButton,
                    backgroundColor: "#E8E8E8"
                  }}
                  onPress={changeAvatarVisibility}
                  name="x-circle-fill"
                  size={24}
                  color="#FFFFFF"
                />
              ) : (
                <MaterialIcons
                  style={{
                    ...styles.addRemoveButton,
                    backgroundColor: "#FF6C00"
                  }}
                  name="add-circle"
                  onPress={changeAvatarVisibility}
                  size={25}
                  color="#FFFFFF"
                />
              )}
            </View>
            <RouterButton style={{ color: "#BDBDBD" }} screenName="Login" />
            <Text style={styles.textUser}>Natali Romanova</Text>
            <View style={styles.main}>
              <View style={styles.publication}>
                <Image
                  style={styles.img}
                  source={require("../assets/images/rectangle_23.jpg")}
                />
                <Text style={styles.publicationTitle}>Лес</Text>
                <View style={styles.details}>
                  <View style={styles.reaction}>
                    <TouchableOpacity
                      style={{ flexDirection: "row", marginRight: 24 }}
                    >
                      <MaterialCommunityIcons
                        name="message-reply"
                        size={24}
                        color="#FF6C00"
                        onPress={() => navigation.navigate("Comments")}
                      />
                      <Text style={styles.comments}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: "row" }}>
                      <Feather name="thumbs-up" size={24} color="#FF6C00" />
                      <Text style={styles.comments}>153</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={{ flexDirection: "row" }}>
                    <Feather
                      name="map-pin"
                      size={24}
                      color="#BDBDBD"
                      onPress={() => navigation.navigate("Map")}
                    />
                    <Text style={styles.location}>Ukraine</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.publication}>
                <Image
                  style={styles.img}
                  source={require("../assets/images/rectangle_2.jpg")}
                />
                <Text style={styles.publicationTitle}>
                  Закат на Черном море
                </Text>
                <View style={styles.details}>
                  <View style={styles.reaction}>
                    <TouchableOpacity
                      style={{ flexDirection: "row", marginRight: 24 }}
                    >
                      <MaterialCommunityIcons
                        name="message-reply"
                        size={24}
                        color="#FF6C00"
                        onPress={() => navigation.navigate("Comments")}
                      />
                      <Text style={styles.comments}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: "row" }}>
                      <Feather name="thumbs-up" size={24} color="#FF6C00" />
                      <Text style={styles.comments}>200</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={{ flexDirection: "row" }}>
                    <Feather
                      name="map-pin"
                      size={24}
                      color="#BDBDBD"
                      onPress={() => navigation.navigate("Map")}
                    />
                    <Text style={styles.location}>Ukraine</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.publication}>
                <Image
                  style={styles.img}
                  source={require("../assets/images/rectangle_3.jpg")}
                />
                <Text style={styles.publicationTitle}>
                  Старый домик в Венеции
                </Text>
                <View style={styles.details}>
                  <View style={styles.reaction}>
                    <TouchableOpacity
                      style={{ flexDirection: "row", marginRight: 24 }}
                    >
                      <MaterialCommunityIcons
                        name="message-reply"
                        size={24}
                        color="#FF6C00"
                        onPress={() => navigation.navigate("Comments")}
                      />
                      <Text style={styles.comments}>50</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: "row" }}>
                      <Feather name="thumbs-up" size={24} color="#FF6C00" />
                      <Text style={styles.comments}>200</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={{ flexDirection: "row" }}>
                    <Feather
                      name="map-pin"
                      size={24}
                      color="#BDBDBD"
                      onPress={() => navigation.navigate("Map")}
                    />
                    <Text style={styles.location}>Italy</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end"
  },
  wrapperPublication: {
    backgroundColor: `#FFFFFF`,
    paddingTop: 22,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 200
  },
  avatar: {
    top: -60,
    left: Dimensions.get("window").width / 2 - 60,
    width: 120,
    height: 120,
    backgroundColor: `#F6F6F6`,
    borderRadius: 16,
    position: "absolute",
    alignItems: "center"
  },
  textUser: {
    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0.01,
    marginBottom: 33
  },
  addRemoveButton: {
    position: "absolute",
    borderRadius: 100,
    alignItems: "center",
    bottom: 14,
    right: -12.5
  },
  main: {
    paddingHorizontal: 16
  },
  publication: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 35
  },
  img: {
    width: "100%",
    borderRadius: 8
  },
  publicationTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginTop: 8,
    color: "#212121"
  },
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  reaction: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  comments: {
    display: "flex",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
    marginLeft: 9
  },
  location: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    justifyContent: "flex-end",
    color: "#212121",
    textDecorationLine: "underline",
    marginLeft: 9
  }
});
