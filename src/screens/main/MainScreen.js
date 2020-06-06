import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import MainScreenStyles from "./styles/MainScreenStyles";
import MainScreenHeader from "./components/MainScreenHeader";

const MainScreen = () => {
  return (
    <View>
      <MainScreenHeader />
      <View style={MainScreenStyles.container}>
        <Image
          source={require("../../../assets/background.jpg")}
          style={MainScreenStyles.image}
        />
        <Text style={{ fontSize: 30 }}> Welcome to Webify </Text>
      </View>
    </View>
  );
};

export default MainScreen;
