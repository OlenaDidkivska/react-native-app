import { useCallback, useState } from "react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Dimensions, Image, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

SplashScreen.preventAutoHideAsync();

const initialState = {
  login: "",
  email: "",
  password: "",
};

const addButtonIcon = require("../assets/images/add.png")
const removeButtonIcon = require("../assets/images/remove.png")

export const RegistrationScreen = () => {
  const [isAvatar, setIsAvatar] = useState(true)
  const [state, setState] = useState(initialState)
  const [isFocusedLogin, setIsFocusedLogin] = useState(false)
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

const changeAvatarVisibility = () => {
  setIsAvatar(!isAvatar)
}

  const keyboardHide = () => {
    Keyboard.dismiss;
    setIsShowKeyboard(false)
    console.log(state);
    setState(initialState) 
  };

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss(), setIsShowKeyboard(false)}}>
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          
              <ImageBackground style={styles.image} source={require("../assets/images/photo_bg.jpg")}>
              <View style={{...styles.form, marginBottom: isShowKeyboard ? -160 : 0}} onLayout={onLayoutRootView}>
          <View style={styles.avatar}>
            <Image style={{borderRadius: 16}} source={isAvatar? require("../assets/images/rectangle.jpg"): ""}/>
            {isAvatar? <Pressable style={styles.removeButton} onPress={changeAvatarVisibility}>
                    <Image source={removeButtonIcon}/>
                  </Pressable> : <Pressable style={styles.addButton} onPress={changeAvatarVisibility}>
                    <Image source={addButtonIcon}/>
                  </Pressable>}
                </View>
          <View style = {styles.formTitle}>
            <Text style = {styles.formTitleText}>
            Регистрация
            </Text>
          </View>
          <View>
            <TextInput
              textAlign={"left"}
              selectionColor={"#212121"}
              onFocus={() => {setIsFocusedLogin(true), setIsShowKeyboard(true)}}
              onBlur={() => setIsFocusedLogin(false)}
              style={{...styles.input, borderColor: isFocusedLogin? "#FF6C00" : "#E8E8E8"}}
              placeholder={"Логин"}
              textContentType={"username"}
              inputMode={"text"}
              autoCapitalize={"none"}
              value={state.login}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, login: value }))
              }
            />
          </View>
          <View style={{ marginTop: 16 }}>
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
              textContentType={"username"}
              autoCapitalize={"none"}
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
            onPress={keyboardHide}>
            <Text style={styles.btnTitle}>Зарегистрироваться</Text>
          </TouchableOpacity>
          <View style = {styles.checkLogin}>
            <Text style = {styles.checkLoginText}>Уже есть аккаунт? Войти</Text>
          </View>
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
  text: {
    color: "green",
    fontSize: 30,
  },
  form: {
    backgroundColor: `#FFFFFF`,
    paddingHorizontal: 16,
    paddingTop: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 549,
  },
  avatar: {
    top: -60,
    left: Dimensions.get("window").width/2-60,
    width: 120,
    height: 120,
    backgroundColor: `#F6F6F6`,
    borderRadius: 16,
    position: 'absolute',
    alignItems: "center"
  },
  addButton: {
    position: 'absolute',
    bottom: 14,
    right: -12.5,
  },
  removeButton: {
    position: 'absolute',
    bottom: 9,
    right: -18.5,
  },
  formTitle: {
    alignItems: "center",
  },
  formTitleText: {
    color: "#212121",
    marginBottom: 33,
    fontSize: 30,
    fontFamily: "Roboto-Medium"
  },
  input: {
    height: 50,
    fontSize: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    fontFamily: "Roboto-Regular"
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
