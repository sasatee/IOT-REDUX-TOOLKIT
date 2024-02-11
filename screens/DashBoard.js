import { View, Text, Dimensions, Button } from "react-native";
import React from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    name: "Seoul",
    population: 21500000,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Toronto",
    population: 2800000,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];

const data1 = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 0.4) => `rgba(134, 65, 244, ${opacity})`, // optional
      // strokeWidth: 3, // optional
    },
  ],
  legend: ["Rainy Days"], // optional
};
const screenWidth = Dimensions.get("window").width;
export default function DashBoard() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        // flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PieChart
        data={data}
        width={screenWidth}
        height={220}
        const
        chartConfig={{
          backgroundGradientFrom: "#1E2923",
          backgroundGradientFromOpacity: 0,
          backgroundGradientTo: "#08130D",
          backgroundGradientToOpacity: 0.5,
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          strokeWidth: 2, // optional, default 3
          barPercentage: 0.5,
          useShadowColorFromDataset: false, // optional
        }}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        //center={[10, 50]}
        //absolute
      />

      <View className="py-7">
        <LineChart
          data={data1}
          width={screenWidth}
          height={256}
          verticalLabelRotation={30}
          chartConfig={{
            backgroundGradientFrom: "#1A85EA",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#7F7F7F",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(211, 166, 224, ${opacity})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false, // optional
          }}
          style={{ margin: 10 }}
          bezier
        />
      </View>
    </View>
  );
}
