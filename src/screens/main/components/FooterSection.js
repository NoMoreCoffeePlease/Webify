import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import footerStyles from "./styles/FooterStyles";

const FooterSection = () => {
  return (
    <View style={footerStyles.container}>
      <View style={footerStyles.careersContainer}>
        <Text style={footerStyles.sectionTitle}>{"Careers"}</Text>
        <Text style={footerStyles.detailsText}>{"+40 742 826 647"}</Text>
        <Text style={footerStyles.detailsText}>
          {"stoica.andrei32@gmail.com"}
        </Text>
      </View>
      <View style={footerStyles.socialMediaContainer}>
        <Text style={footerStyles.sectionTitle}>{"Contact Us"}</Text>
        <TouchableOpacity>
          <Text style={footerStyles.detailsText}>{"LinkedIn"}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={footerStyles.detailsText}>{"Faceook"}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={footerStyles.detailsText}>{"Instagram"}</Text>
        </TouchableOpacity>
      </View>
      <View style={footerStyles.questionsContainer}>
        <Text style={footerStyles.sectionTitle}>
          {"Do you have a question?"}
        </Text>
        <Text style={footerStyles.detailsText}>
          {"stoica.andrei32@gmail.com"}
        </Text>
      </View>
    </View>
  );
};

export default FooterSection;
