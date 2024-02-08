import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";

import { selectResponseData } from "../features/detailSlice";

import { useNavigation } from "@react-navigation/native";

import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";

const MapScreeen = () => {
  const navigation = useNavigation();
  const ResponseData = useSelector(selectResponseData);

  const bin2Number = ResponseData.products[0].binNumber[1];
  console.log(bin2Number);

  const longitudeForBin1 = ResponseData?.products[0]?.location.coordinates1[0];
  const latituideForBin1 = ResponseData?.products[0]?.location.coordinates1[1];

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons color="white" size={30} />
          </TouchableOpacity>
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
            Please for the authority to arrive
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: latituideForBin1,
          longitude: longitudeForBin1,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: latituideForBin1,
            longitude: longitudeForBin1,
          }}
          title={"Bin 2"}
          description={"Location of bin 2 is situated"}
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
          <Text className="text-lg">Lorem</Text>
          <Text className="text-gray-400">bin {bin2Number}</Text>
        </View>
        <View className="p-9">
          <Text className="text-[#00CCBB] text-lg mr-5 font-thin">Call</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MapScreeen;
