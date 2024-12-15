import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 150,
    borderColor: "white",
    borderWidth: 5,
    marginTop: -75,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: 18,
  },
});
