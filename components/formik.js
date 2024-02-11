import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { View } from "react-native";
// redux
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../features/authSlice";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showtext, setShowText] = useState(true);
  // toast notification
  const [name, setName] = useState("");

  //redux state
  const { loading, error, data } = useSelector((state) => state.user);
  const usernameLogin = useSelector((state) => state.user.username);
  //
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleUserLogin = () => {
    let userCredentials = {
      email: "sarvam123445@gmail.com",
      password: "yuvanpassword",
    };
    // console.log(userCredentials.email, userCredentials.password);
    dispatch(signInUser(userCredentials)).then((result) => {
      if (result.payload) {
        setEmail("");
        setPassword("");
        setName(usernameLogin);
        navigation.navigate("Dashboard");
      }
    });
  };

  useEffect(() => {
    if (loading === true) {
      Toast.show({
        type: "success",
        position: "top",
        text1: ` Successfully login`,
        autoHide: true,
        visibilityTime: 10000,
        onPress: () => {
          console.log("Pressed notification");
        },
      });
    }
  }, [loading]);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#ffffff" }}
      showsVerticalScrollIndicator={false}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ImageBackground
          source={require("../assets/background.jpg")}
          style={{ height: Dimensions.get("window").height / 3 }}
        >
          {/* <View style={styles.brandview}>
              <Ionicons name="trash-bin-outline" size={24} color="black" />
            </View> */}
        </ImageBackground>

        {/* bottom view */}
        <View style={styles.bottomView}>
          {/* welcome view */}

          <View style={{ padding: 40 }}>
            <Text style={{ color: "#4632A1", fontSize: 34 }}>Welcome</Text>
            <Text style={{ color: "red", fontStyle: "normal" }}>
              Admin Login
            </Text>

            {/* Form view */}
            <View style={{ marginTop: 10 }}>
              <TextInput
                style={styles.input}
                placeholder="example@gmail.com"
                onChangeText={(text) => setEmail(text)}
                value={email}
                //blurOnSubmit={true}
                // underlineColorAndroid=""
              />

              <TextInput
                style={styles.input}
                placeholder="Enter password"
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}
              />
              <View style={styles.btnContainer}>
                <Button
                  title="Login"
                  disabled={!showtext}
                  color="#841584"
                  borderRadius={10}
                  onPress={handleUserLogin}
                  onPressIn={() => console.log("dfdfdf")}
                />

                {!showtext && <ActivityIndicator size="small" color="white" />}
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  brandview: {
    flex: 1,
    //flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomView: {
    flex: 1,
    backgroundColor: "#ffffff",
    bottom: 80,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  input: {
    height: 30,
    borderColor: "#000000",
    borderBottomWidth: 0.3,
    marginBottom: 36,
  },
  container: {
    flex: 1,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 40,
    borderRadius: 3,
  },
});

export default LoginForm;
