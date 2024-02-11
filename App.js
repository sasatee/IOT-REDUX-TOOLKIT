import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Toast notification
import { ToastProvider } from "react-native-toast-notifications";

// Icons
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { store } from "./Store";
import { Provider, useSelector } from "react-redux";

// Screens
import Login from "./screens/LoginScreen";
import MapScreeen from "./screens/MapScreen1";
import MapScreeen2 from "./screens/MapScreen2";
import HomeScreen from "./screens/HomeScreen";
import DashBoard from "./screens/DashBoard";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App(props) {
  return (
    <ToastProvider>
      <NavigationContainer>
        <Provider store={store}>
          <MainNavigator />
        </Provider>
      </NavigationContainer>
    </ToastProvider>
  );
}

function MainNavigator() {
  const succesLogin = useSelector((state) => state.user.isSuccess);
  // console.log(succesLogin);

  if (!succesLogin) {
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
          name="Login"
          component={Login}
          options={{
            headerShown: true,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name="dashboard-customize"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  } else {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="dashboard"
          component={DashBoard}
          options={{
            headerShown: false,
          }}
          navigationKey="1234"
          getId={({ params }) => params.userId}
          // navigationKey="dashboard"
        />
      </Stack.Navigator>
    );
  }

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
