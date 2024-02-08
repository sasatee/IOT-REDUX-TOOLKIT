import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../features/authSlice";
import { useNavigation } from "@react-navigation/native";

const LoginForm = () => {
  //state
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  // redux states
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleUserLogin = () => {
    let userCredentials = {
      email,
      password,
    };
    dispatch(signInUser(userCredentials)).then((result) => {
      if (result.payload) {
        setemail("");
        setPassword("");
        navigation.navigate("Map");
      }
    });
  };

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setemail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        //secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleUserLogin}>
          <Text style={styles.buttonText}>
            {" "}
            {loading ? "Loading..." : "Login"}{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 100,
    backgroundColor: "blue",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default LoginForm;
