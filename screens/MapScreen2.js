import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
// import {XMarkIcon} from ""

import { selectResponseData } from "../features/detailSlice";

import { useNavigation } from "@react-navigation/native";

import * as Progress from "react-native-progress";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const MapScreeen2 = () => {
  const navigation = useNavigation();
  const ResponseData = useSelector(selectResponseData);

  const bin1Number = ResponseData.products[0].binNumber[0];

  //bin 1

  const longitudeForBin2 = ResponseData?.products[0]?.location.coordinates2[0];
  const latituideForBin2 = ResponseData?.products[0]?.location.coordinates2[1];

  return (
    <View className=" bg-slate-300 flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          {/* <TouchableOpacity onPress={() => navigation.navigate("Home")}>
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
            Please wait for the authority to arrive at your location.
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: latituideForBin2,
          longitude: longitudeForBin2,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="satellite"
      >
        <Marker
          coordinate={{
            latitude: latituideForBin2,
            longitude: longitudeForBin2,
          }}
          title={"Bin 1"}
          description={"Location of bin 1 is situated"}
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
          <Text className="text-gray-400">bin {bin1Number}</Text>
        </View>
        <View className="p-9">
          <Text className="text-[#00CCBB] text-lg mr-5 font-thin">Call</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MapScreeen2;
