import { Text, View, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function App() {
  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <Image
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg",
          }}
          style={styles.imageContainer}
        />
        <Image
          style={styles.profileImage}
          source={require("./assets/sandibek.png")}
        />
        <Text style={styles.text}>Sam Ibraimov</Text>
        <Text style={styles.paragraph}>Frontend/Mobile Developer</Text>
        <View style={styles.iconsContainer}>
          <FontAwesome5 name="github" size={24} color="black" />
          <FontAwesome5 name="linkedin" size={24} color="black" />
          <FontAwesome6 name="square-instagram" size={24} color="black" />
        </View>
        <Text style={{ fontSize: 28 }}>
          In this case, we will see that the content no longer fits on the
          screen. By default, React Native views are not scrollable. To make the
          scrollable, we can use a component, imported from `react-native`. This
          component is very similar to a normal `, with the benefit of making
          the content inside scrollable. It can be either a vertical scroll or
          even a horizontal scroll. Let’s import it and wrap our root container
          inside the ScrollView In this case, we will see that the content no
          longer fits on the screen. By default, React Native views are not
          scrollable. To make the scrollable, we can use component, imported
          from `react-native`. This component is very similar to a normal `,
          with the benefit of making the content inside scrollable. It can be
          either a vertical scroll or even a horizontal scroll. Let’s import it
          and wrap our root container inside the ScrollView
        </Text>
      </View>
    </ScrollView>
  );
}
