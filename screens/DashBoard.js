import {
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import LoginForm from "../components/loginForm";

const Login = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={{ margin: 50 }}>
      <View>
        <LoginForm style={{ paddingTop: 20 }} />
      </View>
      {/* 
      <View style={{ paddingTop: 20 }}>
        <TouchableOpacity>
          <Button
            title="Go to logout"
            color="black" // Set text color to black
            onPress={() => navigation.navigate("home")}
          />
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default Login;
