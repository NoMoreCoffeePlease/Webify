import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as Linking from "expo-linking";
import AboutSectionStyles from "./styles/AboutSectionStyles";

const AboutSection = () => {
  const members = [
    {
      image: require("../../../../assets/me.jpg"),
      description:
        "- I have one year experience in the development of mobile applications, working at a company in Cluj Napoca.\n Click the link below for a full Resume",
      onPress: () =>
        Linking.openURL("https://www.linkedin.com/in/stoicaandrei32/"),
      linkUrl: "https://www.linkedin.com/in/stoicaandrei32/",
    },
    {
      image: require("../../../../assets/norbi_profile2.jpg"),
      description:
        "Norbi is a master at his craft, if he sets something in his mind he always reaches that goal.",
      onPress: () =>
        Linking.openURL("https://www.linkedin.com/in/stoicaandrei32/"),
      linkUrl: "https://www.linkedin.com/in/stoicaandrei32/",
    },
    {
      image: require("../../../../assets/paul_profile2.jpeg"),
      description:
        "Paul is a very dedicated person. He has 2 years experience in Android development and always aspiring to obtain greater knowledge",
      onPress: () =>
        Linking.openURL("https://www.linkedin.com/in/stoicaandrei32/"),
      linkUrl: "https://www.linkedin.com/in/paul-claudiu-orha-935b46149/",
    },
  ];
  return (
    <View style={AboutSectionStyles.container}>
      <Text style={AboutSectionStyles.title}>
        Let us tell u some things about us
      </Text>
      <View style={AboutSectionStyles.description}>
        <View>
          <Text>
            {
              " We are a group of students that have in mind the growth of Baia Mare, our home city \n We are determined to make any business that contacts us grow so that we can raise the local economy!"
            }
          </Text>
          <Text style={AboutSectionStyles.endingText}>
            {"Aaaand... A little bit about every team member: "}
          </Text>
        </View>
      </View>
      <View style={AboutSectionStyles.membersContainer}>
        {members.map((item) => {
          return (
            <View style={AboutSectionStyles.memberContainer}>
              <TouchableOpacity
                style={AboutSectionStyles.memberColumn}
                onPress={item.onPress}
              >
                <Image
                  source={item.image}
                  style={AboutSectionStyles.meImage}
                  resizeMode={"cover"}
                />
              </TouchableOpacity>
              <View style={AboutSectionStyles.memberDescriptionContainer}>
                <Text style={AboutSectionStyles.memberDescriptionText}>
                  {item.description}
                </Text>
                <TouchableOpacity onPress={item.onPress}>
                  <Text style={AboutSectionStyles.linkedInText}>
                    {item.linkUrl}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};
export default AboutSection;
