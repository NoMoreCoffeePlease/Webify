import React from "react";
import { View, Text, Image } from "react-native";
import businessStyles from "./styles/BusinessStyles";

const BusinessSection = () => {
  return (
    <View style={businessStyles.container}>
      <View style={businessStyles.itemContainer}>
        <Image
          source={require("../../../../assets/idea_man.jpg")}
          style={businessStyles.ideaHeaderImage}
        />
      </View>
      <View style={businessStyles.itemContainer}>
        <Image
          source={require("../../../../assets/collaborate_group.jpg")}
          style={businessStyles.ideaHeaderImage}
        />
      </View>
      <View style={businessStyles.itemContainer}>
      <Image
          source={require("../../../../assets/hands_together.jpg")}
          style={businessStyles.ideaHeaderImage}
        />
      </View>
      <View style={businessStyles.itemContainer}>
      <Image
          source={require("../../../../assets/shaking_hands.png")}
          style={businessStyles.ideaHeaderImage}
        />
      </View>
    </View>
  );
};

export default BusinessSection;
