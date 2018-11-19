import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";

import { MenuButton } from "./MenuButton";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const TabbedMenu = ({ navigation }) => {
  return (
    <View style={styles.viewStyle}>
      <MenuButton
        image="https://static.thenounproject.com/png/79390-200.png"
        label="Menu"
        onPress={() => navigation.navigate("Scan")}
      />
      <MenuButton
        image="https://static.thenounproject.com/png/79390-200.png"
        label="Menu"
        onPress={() => navigation.navigate("Scan")}
      />
      <MenuButton
        image="https://static.thenounproject.com/png/79390-200.png"
        label="Menu"
        onPress={() => navigation.navigate("Scan")}
      />
      <MenuButton
        image="https://static.thenounproject.com/png/79390-200.png"
        label="Menu"
        onPress={() => navigation.navigate("Scan")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: SCREEN_HEIGHT / 8,
    width: SCREEN_WIDTH,
    padding: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  }
});

export { TabbedMenu };
