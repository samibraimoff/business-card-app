import { Text, View, Image, StyleSheet } from "react-native";

export const ProjectCard = ({ image, name }) => {
  return (
    <View>
      <Image
        source={image}
        style={{ height: 150, aspectRatio: 16 / 9, borderRadius: 18 }}
      />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 18,
          color: "dimgray",
          marginTop: 10,
        }}
      >
        {name}
      </Text>
    </View>
  );
};
