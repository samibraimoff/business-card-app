import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg",
        }}
        style={styles.imageContainer}
      />
      <Image
        style={styles.profileImage}
        source={require("./assets/vadim.png")}
      />
      <Text style={styles.text}>Sam Ibraimov</Text>
      <Text style={styles.paragraph}>Frontend/Mobile Developer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
