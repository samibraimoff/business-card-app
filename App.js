import { Text, View, Image } from "react-native";
import { styles } from "./styles";

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
