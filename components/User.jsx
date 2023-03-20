import { StyleSheet, Text, View, Image } from "react-native";

export const User = () => {
  return (
    <View style={styled.user}>
      <Image
        style={styled.img}
        source={require("../assets/images/rectangle.jpg")}
      />
      <View style={styled.userText}>
        <Text style={styled.name}>Natali Romanova</Text>
        <Text style={styled.email}>email@example.com</Text>
      </View>
    </View>
  );
};

const styled = StyleSheet.create({
  user: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 30,
    marginHorizontal: 16
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 16
  },
  userText: {
    marginLeft: 8,
    justifyContent: "center"
  },
  name: {
    fontFamily: "Roboto",
    fontSize: 13,
    fontWeight: "bold",
    color: "#212121"
  },
  email: {
    fontFamily: "Roboto",
    fontSize: 11,

    color: "#rgba(33, 33, 33, 0.8)"
  }
});
