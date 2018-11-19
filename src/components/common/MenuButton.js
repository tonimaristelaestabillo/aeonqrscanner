import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const MenuButton = ({ onPress, image }) => {
  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.image} source={{ uri: image }} onPress={onPress} />
        {/* <Text> {{ label }} </Text> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: SCREEN_HEIGHT / 8,
    width: SCREEN_WIDTH / 5,
    padding: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: 25,
    width: 25,
    resizeMode: "contain",
    tintColor: "#1c3469"
  }
});

export { MenuButton };
