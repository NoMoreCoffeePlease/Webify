import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 100,
    paddingBottom: 20,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    height: (Dimensions.get("window").height * 80) / 100,
    width: "100%",
  },
  titleText: {
    fontSize: 70,
    color: "rgb(31,28,31)",
  },
  descriptionText: {
    marginTop: 15,
    fontSize: 30,
    color: "rgb(31,28,31)",
  },
  canvas: {
    height: 50,
  },
  learnMoreContainer: {
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 40,
    backgroundColor: "white",
  },
});
