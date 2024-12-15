import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: "#fff",
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
  imageContainer: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 150,
    borderColor: "black",
    borderWidth: 1,
    marginTop: -75,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: 18,
  },
  iconsContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 20,
  },
});
