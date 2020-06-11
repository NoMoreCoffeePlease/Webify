import React, { useRef } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import MainScreenStyles from "./styles/MainScreenStyles";
import MainScreenHeader from "./components/MainScreenHeader";
import AboutSection from "./components/AboutSection";
import FooterSection from "./components/FooterSection";
import BusinessSection from "./components/BusinessSection";

const MainScreen = () => {
  return (
    <View style={MainScreenStyles.mainContainer}>
      <MainScreenHeader />
      <ImageBackground
        source={require("../../../assets/background-coffee-laptop.jpg")}
        style={MainScreenStyles.backgroundImage}
        resizeMode={"cover"}
      >
        <View style={MainScreenStyles.container}>
          <Text style={MainScreenStyles.titleText}> Welcome to Webify </Text>
          <Text style={MainScreenStyles.descriptionText}>
            Start your internet journey with our morning cup of coffee
          </Text>
          <View style={MainScreenStyles.canvas}></View>
        </View>
      </ImageBackground>
      <FooterSection />
    </View>
  );
};

export default MainScreen;
