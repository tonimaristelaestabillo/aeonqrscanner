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

const Header = ({ onPress, primaryColor, headerTextColor, label }) => {
  return (
    <View style={[styles.viewStyle, { backgroundColor: primaryColor }]}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={require("../../assets/hamburger.png")}
          style={[styles.navigationButtonStyle, { tintColor: headerTextColor }]}
        />
      </TouchableOpacity>
      <Text style={[styles.textStyle, { color: headerTextColor }]}>
        {label}
      </Text>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={require("../../assets/hamburger.png")}
          style={[styles.navigationButtonStyle, { tintColor: headerTextColor }]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: SCREEN_HEIGHT / 12,
    width: SCREEN_WIDTH,
    padding: 15,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  navigationButtonStyle: {
    marginTop: -5,
    resizeMode: "contain",
    justifyContent: "center"
  },
  textStyle: {
    fontSize: 18
  }
});

export { Header };
