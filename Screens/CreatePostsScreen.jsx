import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { KeyboardAvoidingView } from "react-native";

export const CreatePostsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.photoLayout}>
        <View style={styles.photoLayoutBtn}>
          <FontAwesome name="camera" size={20} color="#BDBDBD" />
        </View>
      </View>
      <View>
        <Text style={styles.downloadText}>Загрузите фото</Text>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "margin" : "height"}
      >
        <View style={{ marginTop: 48 }}>
          <TextInput
            style={{
              ...styles.input,
              borderBottomWidth: 1,
              borderBottomColor: "#E8E8E8"
            }}
            onFocus={() => setIsKeyboardShow(true)}
            placeholder="Название..."
            // keyboardType="default"
            // value={data.name}
            // onChangeText={(value) =>
            //   setData((prevState) => ({
            //     ...prevState,
            //     name: value
            //   }))
            // }
          />
        </View>
        <View
          style={{
            marginTop: 32,
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: "#E8E8E8",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            style={styles.location}
            onPress={() => navigation.navigate("Map", location)}
          >
            <Feather
              name="map-pin"
              style={{ marginRight: 8 }}
              size={16}
              color="#BDBDBD"
            />
          </TouchableOpacity>
          <TextInput
            style={{ ...styles.input, flex: 1 }}
            // onFocus={() => setIsKeyboardShow(true)}
            placeholder="Местность..."
            // keyboardType="default"
            // value={data.place}
            // onChangeText={(value) =>
            //   setData((prevState) => ({
            //     ...prevState,
            //     place: value
            //   }))
            // }
            //value={
            //   regionName
            //       ? `${regionName[0].city}, ${regionName[0].country}`
            //       : ''
            // }
            //textContentType={'location'}
          />
        </View>
        <View>
          {/* //! ---------- Кнопка: Створити -------- */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btn}
            // onPress={sendPhotoEndData}
          >
            <Text style={styles.btnTitle}>Опубликовать</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  permissionContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 32
  },
  photoLayout: {
    height: 240,
    backgroundColor: "#F6F6F6",

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  takePhotoContainer: {
    position: "absolute",
    flex: 1,
    top: 5,
    left: 5,
    borderColor: "#fffC19",
    borderWidth: 1,
    borderRadius: 8
  },
  photoLayoutBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center"
  },
  photoIconBtn: {
    color: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  downloadText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginTop: 8,
    color: "#BDBDBD"
  },
  input: {
    fontSize: 16,
    color: "#BDBDBD",
    height: 45
  },
  btn: {
    height: 51,
    marginTop: 32,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  btnTitle: {
    color: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
