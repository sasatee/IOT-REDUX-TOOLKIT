import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";

import { useNavigation } from "@react-navigation/native";

import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const MapScreeen = () => {
  const navigation = useNavigation();
  //const restaurant = useSelector(selectRestaurant);
  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          {/* <TouchableOpacity onPress={() => navigation.navigate("Basket")}>
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity> */}
          <Text className="font font-light text-white text-lg"> help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400 ">Estimated Arrival</Text>
              <Text className="text-4xl text-bold ">45-55 minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
          <Text className="mt-3 text-gray-500">
            Your order at Posrt louis is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: -20.22442,
          longitude: 57.49452,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: -20.22442,
            longitude: 57.49452,
          }}
          // title=
          // description=
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>
      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View>
          <Text className="text-lg">sarvam seetohul</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <View className="p-9">
          <Text className="text-[#00CCBB] text-lg mr-5 font-thin">Call</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MapScreeen;
