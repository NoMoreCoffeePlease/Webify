import React from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MainScreenHeaderStyles from "./styles/MainScreenHeaderStyles";
import roots from "../../../navigation/roots";

const MainScreenHeader = (scrollViewRef) => {
  const navigation = useNavigation();

  return (
    <View style={MainScreenHeaderStyles.container}>
      <Image
        source={require("../../../../assets/mug.png")}
        style={MainScreenHeaderStyles.logo}
      />
      <TouchableOpacity
        onPress={navigation.navigate(roots.mainScreen)}
        style={MainScreenHeaderStyles.webifyContainer}
      >
        <Text style={MainScreenHeaderStyles.text}>Webify</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={navigation.navigate(roots.mainScreen)}
        style={MainScreenHeaderStyles.aboutContainer}
      >
        <Text style={MainScreenHeaderStyles.text}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            "https://www.facebook.com/Webify-102148291537933/?view_public_for=102148291537933"
          )
        }
        style={MainScreenHeaderStyles.aboutContainer}
      >
        <Text style={MainScreenHeaderStyles.text}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreenHeader;
