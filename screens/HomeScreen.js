import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFetchDataQuery } from "../service/ApiCall";
import { useDispatch, useSelector } from "react-redux";
import { setResponseData } from "../features/detailSlice";
import { selectResponseData } from "../features/detailSlice";
import Toast from "react-native-toast-message";
import { StatusBar } from "expo-status-bar";
import MyComponent from "../components/poster";

//iCONS
import { Ionicons } from "@expo/vector-icons";
const products = [
  {
    id: 1,
    name: "Bin 1",
    image: <Ionicons name="trash-bin-outline" size={24} color="black" />,
    screen: "Map2",
  },
  {
    id: 2,
    name: "Bin 2",
    image: <Ionicons name="trash-bin-sharp" size={24} color="black" />,
    screen: "Map",
  },
];

const HomeScreen = () => {
  const { data: response } = useFetchDataQuery();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  //  console.log(response);

  useEffect(() => {
    if (response) {
      dispatch(setResponseData(response));
    }
    // console.log(response);
  }, [response, dispatch]);
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const selectInfo = useSelector(selectResponseData);
  const isBinFullCapacity =
    selectInfo && selectInfo.products
      ? selectInfo.products[0].wasteLevel.currentStatus
      : "";
  const isBinEmpty =
    selectInfo && selectInfo.products
      ? selectInfo.products[0].wasteLevel.nextStatus
      : "";
  const bin1Number =
    selectInfo && selectInfo.products
      ? selectInfo.products[0].binNumber[0]
      : "";
  console.log(isBinFullCapacity, bin1Number);
  useEffect(() => {
    if (isBinFullCapacity === "full capacity") {
      Toast.show({
        type: "success",
        position: "top",
        text1: `Bin ${bin1Number} need to be empty as soon as possible`,
        autoHide: true,
        visibilityTime: 8000,
        onPress: () => {
          console.log("Pressed notification");
        },
      });
    } else {
      // Toast.show({
      //   type: "error",
      //   text2: "Bin1 has empty",
      //   autoHide: true,
      //   visibilityTime: 4000,
      // });
    }
  }, []);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView className="z-10">
          <View className="h-full p-3 bg-slate-100 rounded-xl ">
            <View className="flex-row justify-between">
              <View className="flex items-start">
                <Text className="text-2xl font-bold text-gray-400">Hey,</Text>
                <Text className="text-sm text-blue-500 font-extralight">
                  Have you taken out the trash today?
                </Text>
              </View>
              <Image
                source={{
                  uri: "https://links.papareact.com/fls",
                }}
                className="w-20 h-20"
              />
            </View>

            <View className="bg-green-400 p-5 rounded-3xl mb-5">
              <View className="flex-row justify-between">
                <View className="flex items-center">
                  <Text className="text-blue-200 text-xl bottom-1 p-3">
                    Trash Collected
                  </Text>
                  <Text className="text-white text-left p-3 right-2">
                    <Text className="text-white font-normal">Total:</Text>
                    300kg
                  </Text>
                </View>
                <View
                  style={{
                    borderStyle: "dotted",
                    borderWidth: 0.4,
                    borderRadius: 0.9,
                    borderColor: "white",
                  }}
                ></View>
                <View className="flex items-center">
                  <Text className="text-blue-200 text-xl bottom-1 p-3">
                    Durations
                  </Text>
                  <Text className="text-white text-left p-3 right-2">
                    5 days
                  </Text>
                </View>
              </View>
            </View>
            <View className="flex items-stretch px-4 ">
              <View className="flex flex-row justify-around">
                {products.map((item, index) => (
                  <TouchableOpacity
                    key={item.id} // Add key prop here
                    onPress={() => navigation.navigate(item.screen)}
                  >
                    <View
                      key={item.id}
                      className="text-cyan-900 p-5 rounded-lg mr-3"
                    >
                      <Text>{item.image}</Text>

                      <Text className="text-cyan-900 pt-4 font-light">
                        {item.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <MyComponent />
            {/* <Button title="logout" onPress={handleLogout}>
              <Text>Logout</Text>
            </Button> */}
          </View>

          <StatusBar hidden={true} />
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
