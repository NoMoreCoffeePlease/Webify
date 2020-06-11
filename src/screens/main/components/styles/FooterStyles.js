import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    height: Dimensions.get("window").height / 2,
    backgroundColor: "rgb(65,57,43)",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  careersContainer: {
    flex: 1,
    marginTop: 100, 
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  socialMediaContainer: {
    flex: 1,
    marginTop: 100, 
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  questionsContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: 100, 
    justifyContent: "flex-start",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 30,
    color: "white",
    marginBottom: 20,
  },
  detailsText: {
    fontSize: 20,
    color: "white",
    marginBottom: 10,
  },
});
