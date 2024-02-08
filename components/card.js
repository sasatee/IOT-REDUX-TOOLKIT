import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export const MenuButton = ({ icon, label }) => (
  <TouchableOpacity className="p-4 bg-white rounded-xl m-2">
    {icon}
    <Text className="text-blue-500">{label}</Text>
  </TouchableOpacity>
);
