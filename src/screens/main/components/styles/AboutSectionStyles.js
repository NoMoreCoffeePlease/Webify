import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 80,
  },
  title: {
    marginLeft: 100,
    fontSize: 30,
  },
  description: {
    marginLeft: 50,
    fontSize: 20,
    marginTop: 100,
    width: 400,
    flexDirection: "row",
  },
  endingText: {
    marginTop: 10,
    fontSize: 25,
  },
  image: {
    width: 300,
    height: 200,
  },
  membersContainer: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  memberContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  memberColumn: {
    felx: 1,
  },
  meImage: {
    flex: 1,
    width: 150,
    height: 200,
  },
  memberDescriptionContainer: {
    marginTop: 20,
    flex: 1,
    width: 300,
    marginBottom: 20,
  },
  memberDescriptionText: {
    flex: 1,
    textAlign: "center",
    marginHorizontal: 10,
  },
  linkedInText: {
    color: "blue",
  },
});
