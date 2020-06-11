import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
  },
  itemContainer: {
    height: 300,
    width: 300,
    borderColor: "rgb(31,28,31)",
    borderRadius: 30,
    justifyContent: "flex-start",
    borderColor: "rgb(241, 87, 40)",
    backgroundColor: "rgb(241, 87, 40)",
  },
  ideaHeaderImage: {
    height: 300,
    width: 300,
    resizeMode: "stretch",
  },
  descriptionText: {
    fontSize: 15,
    textAlign: "center",
    color: 'white'
  },
});
