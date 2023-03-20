import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";
import { useCallback, useState } from "react";
import { ImageBackground, Keyboard, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

SplashScreen.preventAutoHideAsync();

const initialState = {
    email: "",
    password: "",
  };

export const LoginScreen = ({ navigation }) => {

    const [state, setState] = useState(initialState)
    const [isFocusedEmail, setIsFocusedEmail] = useState(false)
    const [isFocusedPassword, setIsFocusedPassword] = useState(false)
    const [isSecurePassword, setIsSecurePassword] = useState(true)
    const [isShowKeyboard, setIsShowKeyboard] = useState(false)

    const [fontsLoaded] = useFonts({
        "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf")
       })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
      }

      const changePasswordVisibility = () => {
        setIsSecurePassword(!isSecurePassword)
        setIsShowKeyboard(false)
    }

    const sendData = () => {
        Keyboard.dismiss();
        setIsShowKeyboard(false)
        console.log(state);
        setState(initialState)
      };

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss(), setIsShowKeyboard(false)}}>
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios"? "padding" : "height"}>
                <ImageBackground style={styles.image} source={require("../assets/images/photo_bg.jpg")}>
                <View style={{...styles.form, marginBottom: isShowKeyboard ? -230 : 0}} onLayout={onLayoutRootView}>
              <View style = {styles.formTitle}>
                <Text style = {styles.formTitleText}>
                Войти
                </Text>
              </View>
            <View>
              <TextInput
                onFocus={() => {setIsFocusedEmail(true), setIsShowKeyboard(true)}}
                onBlur={() => setIsFocusedEmail(false)}
                style={{...styles.input, borderColor: isFocusedEmail? "#FF6C00" : "#E8E8E8"}}
                textAlign={"left"}
                selectionColor={"#212121"}
                placeholder={"Адрес электронной почты"}
                textContentType={"emailAddress"}
                inputMode={"email"}
                autoCapitalize={"none"}
                value={state.email}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
              />
            </View>
            <View style={{ marginTop: 16 }}>
              <TextInput
                onFocus={() => {setIsFocusedPassword(true), setIsShowKeyboard(true)}}
                onBlur={() => setIsFocusedPassword(false)}
                style={{...styles.input, borderColor: isFocusedPassword? "#FF6C00" : "#E8E8E8"}}
                textAlign={"left"}
                selectionColor={"#212121"}
                placeholder={"Пароль"}
                secureTextEntry={isSecurePassword}
                textContentType={"password"}
                value={state.password}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
              />
              <Pressable
                    style={styles.showPasswordBtn}
                    onPress={changePasswordVisibility}
                  >
                    <Text style={styles.showPasswordBtnText}>{isSecurePassword? "Показать" : "Скрыть"}</Text>
              </Pressable>
            </View>
            <TouchableOpacity 
              activeOpacity={0.8}
              style={styles.btn}
                onPress={() => {
                  sendData();
                  navigation.navigate("Home")
              }}>
              <Text style={styles.btnTitle}>Войти</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.checkLogin} onPress={()=> navigation.navigate("Registration")}>
              <Text style = {styles.checkLoginText} >Нет аккаунта? Зарегистрироваться</Text>
            </TouchableOpacity>
          </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "flex-end"
    },
    form: {
      backgroundColor: `#FFFFFF`,
      paddingHorizontal: 16,
      paddingTop: 32,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      height: 489,
    },
    formTitle: {
      alignItems: "center",
    },
    formTitleText: {
      color: "#212121",
      marginBottom: 32,
      fontSize: 30,
      fontFamily: "Roboto-Medium"
    },
    input: {
      height: 50,
      fontSize: 16,
      backgroundColor: "#F6F6F6",
      borderColor: "#E8E8E8",
      borderWidth: 1,
      borderRadius: 8,
      padding: 15,
      fontFamily: "Roboto-Regular"
    },
    showPasswordBtn: {
      position: "absolute",
      right: 16,
      top: 14,
    },
    showPasswordBtnText: {
      fontSize: 16,
      color: "#1B4371",
      textAlign: "right",
    },
    btn: {
      backgroundColor: "#FF6C00",
      height: 50,
      borderRadius: 100,
      marginTop: 43,
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Roboto-Regular",
      fontSize: 16,
    },
    btnTitle: {
      color: "#f0f8ff",
      fontSize: 16,
      fontFamily: "Roboto-Regular"
    },
    checkLogin: {
          alignItems: "center",
          marginTop: 16,
        },
    checkLoginText: {
        fontFamily: "Roboto-Regular",
          color: "#1B4371",
          fontSize: 16,
        }  
  });