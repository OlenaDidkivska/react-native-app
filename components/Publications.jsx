import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export const Publication = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.publication}>
        <Image
          style={styles.img}
          source={require("../assets/images/rectangle_23.jpg")}
        />
        <Text style={styles.publicationTitle}>Лес</Text>
        <View style={styles.details}>
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <Feather
              name="message-circle"
              size={24}
              color="#BDBDBD"
              onPress={() => navigation.navigate("Comments")}
            />
            <Text style={styles.comments}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <Feather
              name="map-pin"
              size={24}
              color="#BDBDBD"
              onPress={() => navigation.navigate("Map")}
            />
            <Text style={styles.location}>
              Ivano-Frankivs'k Region, Ukraine
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.publication}>
        <Image
          style={styles.img}
          source={require("../assets/images/rectangle_2.jpg")}
        />
        <Text style={styles.publicationTitle}>Закат на Черном море</Text>
        <View style={styles.details}>
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <Feather
              name="message-circle"
              size={24}
              color="#BDBDBD"
              onPress={() => navigation.navigate("Comments")}
            />
            <Text style={styles.comments}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <Feather
              name="map-pin"
              size={24}
              color="#BDBDBD"
              onPress={() => navigation.navigate("Map")}
            />
            <Text style={styles.location}>
              Ivano-Frankivs'k Region, Ukraine
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.publication}>
        <Image
          style={styles.img}
          source={require("../assets/images/rectangle_3.jpg")}
        />
        <Text style={styles.publicationTitle}>Старый домик в Венеции</Text>
        <View style={styles.details}>
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <Feather
              name="message-circle"
              size={24}
              color="#BDBDBD"
              onPress={() => navigation.navigate("Comments")}
            />
            <Text style={styles.comments}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <Feather
              name="map-pin"
              size={24}
              color="#BDBDBD"
              onPress={() => navigation.navigate("Map")}
            />
            <Text style={styles.location}>
              Ivano-Frankivs'k Region, Ukraine
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16
  },
  publication: {
    flex: 1,
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
  comments: {
    display: "flex",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
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
