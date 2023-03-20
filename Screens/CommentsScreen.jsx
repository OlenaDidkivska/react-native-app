import React from "react";
import { ScrollView } from "react-native";
import { Image, TextInput, TouchableOpacity } from "react-native";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.commentImage}
          source={require("../assets/images/rectangle_23.jpg")}
        />
        <View style={styles.commentWrapper}>
          <Image
            style={styles.commentAvatarImage}
            source={require("../assets/images/avatar_1.jpg")}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.commentText}>
              Really love your most recent photo. I’ve been trying to capture
              the same thing for a few months and would love some tips!
            </Text>
            <Text style={styles.commentDate}>09 июня, 2020 | 08:40</Text>
          </View>
        </View>
        <View style={styles.commentWrapper}>
          <View
            style={{
              ...styles.textWrapper,
              borderTopRightRadius: 0,
              borderTopLeftRadius: 6
            }}
          >
            <Text style={styles.commentText}>
              A fast 50mm like f1.8 would help with the bokeh. I’ve been using
              primes as they tend to get a bit sharper images.
            </Text>
            <Text style={{ ...styles.commentDate, marginLeft: 0 }}>
              09 июня, 2020 | 09:14
            </Text>
          </View>
          <Image
            style={{
              ...styles.commentAvatarImage,
              marginRight: 0,
              marginLeft: 16
            }}
            source={require("../assets/images/rectangle.jpg")}
          />
        </View>
        <View style={styles.commentWrapper}>
          <Image
            style={styles.commentAvatarImage}
            source={require("../assets/images/avatar_1.jpg")}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.commentText}>
              Thank you! That was very helpful!
            </Text>
            <Text style={styles.commentDate}>09 июня, 2020 | 09:20</Text>
          </View>
        </View>
        <View style={{ width: "100%", marginBottom: 32 }}>
          <TextInput
            style={styles.input}
            placeholder="Комментировать..."
            cursorColor={"#BDBDBD"}
            placeholderTextColor={"#BDBDBD"}
            // onChangeText={}
          ></TextInput>
          <TouchableOpacity
            style={styles.sendButton}
            onPress={() => {
              console.log(" Your comment has been send");
            }}
          >
            <MaterialCommunityIcons name="arrow-up" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 16
  },
  commentImage: {
    height: 240,
    width: "100%",
    marginVertical: 32,
    borderRadius: 8
  },
  commentWrapper: {
    flexDirection: "row",

    marginBottom: 24
  },
  textWrapper: {
    padding: 16,
    flex: 1,
    backgroundColor: "#00000008",
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },

  commentAvatarImage: {
    width: 28,
    height: 28,
    marginRight: 16,
    borderRadius: 16,
    resizeMode: "cover"
  },
  commentText: {
    fontSize: 13,
    lineHeight: 18,
    color: "#212121"
  },
  commentDate: {
    marginLeft: "auto",
    marginTop: 8,
    fontSize: 10,
    lineHeight: 12,
    color: "#BDBDBD"
  },
  input: {
    marginTop: 7,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 15,
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100
  },
  sendButton: {
    position: "absolute",
    top: 15,
    right: 8,
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 50
  }
});
