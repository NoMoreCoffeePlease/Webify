import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import MainScreenStyles from "./styles/MainScreenStyles";

const MainScreen = () => {
  return (
    <View style={MainScreenStyles.container}>
      <Text style={{ fontSize: 30 }}> Welcome to Webify </Text>
    </View>
  );
};

export default MainScreen;
