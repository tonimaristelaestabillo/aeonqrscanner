import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  Dimensions
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

class SplashPage extends Component {
  render() {
    const { navigation } = this.props;
    const { container, text, image } = styles;
    return (
      <View style={container}>
        <Image style={image} source={require("../../assets/qr.png")} />
        <Text style={text}> This is the SplashPage </Text>
        <Button title="Scan" onPress={() => navigation.navigate("Scan")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: SCREEN_HEIGHT / 2,
    width: SCREEN_WIDTH,
    resizeMode: "contain"
  },
  text: {
    color: "#ffffff"
  },
  container: {
    flex: 1,
    backgroundColor: "#1c3469",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default SplashPage;
