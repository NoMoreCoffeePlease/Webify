import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MainScreenHeaderStyles from "./styles/MainScreenHeaderStyles";

const MainScreenHeader = () => {
  return (
    <View style={MainScreenHeaderStyles.container}>
      <TouchableOpacity>
        <Text>Webify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreenHeader;
