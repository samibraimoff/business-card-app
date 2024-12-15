import { Text, View, Image, ScrollView, Button, Linking } from "react-native";
import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ProjectCard } from "./project-card";

export default function App() {
  const contactMeHandler = () => {
    Linking.openURL("mailto:sandibek@gmail.com");
  };
  const name = "Sam Ibraimov";
  const occupation = "Frontend/Mobile Apps developer";
  const links = {
    github: "mygithublink",
    linkedin: "mylinkedin",
    instagram: "myinstagram",
  };
  const renderIcons = () => {
    return (
      <View style={styles.iconsContainer}>
        {links.github && <FontAwesome5 name="github" size={24} color="black" />}
        {links.linkedin && (
          <FontAwesome5 name="linkedin" size={24} color="black" />
        )}
        {links.instagram && (
          <FontAwesome6 name="square-instagram" size={24} color="black" />
        )}
      </View>
    );
  };
  const aboutMe = () => (
    <Text style={{ fontSize: 18, lineHeight: 35, padding: 10 }}>
      I am a passionate software engineer with a dynamic career in both mobile
      and web app development. My journey in technology began with a deep
      interest in creating intuitive and accessible user interfaces, which has
      grown into a professional expertise in crafting high-quality digital
      experiences. With a strong foundation in modern JavaScript frameworks such
      as React and React Native, I specialize in building scalable, responsive,
      and visually appealing applications for both web and mobile platforms.
    </Text>
  );
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]}>
        <ScrollView>
          <StatusBar style="light" />
          <View style={styles.container}>
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
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.paragraph}>{occupation}</Text>
            {renderIcons()}
            <Button title="Contact me" onPress={contactMeHandler} />
            <>{aboutMe()}</>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                color: "dimgray",
                marginTop: 10,
              }}
            >
              My Projects
            </Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 10, padding: 10 }}
          >
            <ProjectCard
              name="Apple Cards"
              image={require("./assets/projects/project1.jpeg")}
            />
            <ProjectCard
              name="Local First"
              image={require("./assets/projects/project2.jpeg")}
            />
            <ProjectCard
              name="Flappy Bird"
              image={require("./assets/projects/project3.jpeg")}
            />
            <ProjectCard
              name="Todo App"
              image={require("./assets/projects/project4.jpeg")}
            />
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
