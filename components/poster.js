import React from "react";
import { View, Text, Image } from "react-native";

const MyComponent = () => {
  return (
    <View className=" m-3 overflow-auto ">
      <View className="flex shadow-lg bg-green-300  rounded-3xl  ">
        <View className="flex justify-center self-center">
          <Image
            source={{
              uri: "https://media.istockphoto.com/id/1383906271/vector/recycle-bin-kawaii-mascot.jpg?s=612x612&w=0&k=20&c=7fBsE0zWoJnuQfd4iqMOEofn87l8azghTB0-cClqAHY=",
            }}
            className="rounded-full -mt-8 border-10 object-top object-cover mr-2 h-16 w-16"
          />
        </View>
        <View className="flex m-10 justify-between">
          <View className="flex flex-row bg-gray-200 rounded-2xl ">
            {/* First Column */}
            <View className="w-1/2">
              <View className="flex flex-col items-center py-6">
                <Image
                  source={require("../assets/trash-bin.gif")}
                  className="w-6 h-6 mr-2"
                />
                <Text className="text-xs font-light">Subscription</Text>
              </View>
              {/* Repeat similar structure for Request and Payment */}
              <View className="flex flex-col items-center py-6">
                <Image
                  source={require("../assets/trash-bin.gif")}
                  className="w-6 h-6 mr-2"
                />
                <Text className="text-xs font-light">Subscription</Text>
              </View>
            </View>

            {/* Second Column */}
            <View className="w-1/2">
              <View className="flex flex-col items-center py-6">
                <Image
                  source={require("../assets/trash-bin.gif")}
                  className="w-6 h-6 mr-2"
                />
                <Text className="text-xs font-light">OnDemand Pickup</Text>
              </View>
              {/* Repeat similar structure for Special Pickup and Account */}
              <View className="flex flex-col items-center py-6">
                <Image
                  source={require("../assets/trash-bin.gif")}
                  className="w-6 h-6 mr-2"
                />
                <Text className="text-xs font-light">Special Pickup</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyComponent;
