import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Toast notification
import Toast from "react-native-toast-message";

// Icons
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { store } from "./Store";
import { Provider, useSelector } from "react-redux";

// Screens
import Login from "./screens/LoginScreen";
import MapScreeen from "./screens/MapScreen1";
import MapScreeen2 from "./screens/MapScreen2";
import HomeScreen from "./screens/HomeScreen";
import DashBoard from "./screens/DashBoard";
import { Entypo } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App(props) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
      <Toast ref={(ref) => Toast.useRef(ref)} />
    </Provider>
  );
}

function MainNavigator() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log(isLoggedIn);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarBadgeStyle: { backgroundColor: "#00CCBB" },
        tabBarActiveBackgroundColor: "white",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: { backgroundColor: "green" },
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="map-marker-alt" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Admin Login"
        component={Login}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="login" size={size} color={color} />
          ),
        }}
      />
      {isLoggedIn && (
        <Tab.Screen
          name="Dashboard"
          component={DashBoard}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="view-dashboard"
                size={size}
                color={color}
              />
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );

  function MapStackScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Map"
          component={MapScreeen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Map2"
          component={MapScreeen2}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
}

export default App;
