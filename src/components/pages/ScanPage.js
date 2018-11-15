import React, { Component } from "react";

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Dimensions,
  View
} from "react-native";

import QRCodeScanner from "react-native-qrcode-scanner";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

class ScanPage extends Component {
  onSuccess(e) {
    Linking.openURL(e.data).catch(err =>
      console.error("An error occured", err)
    );
  }

  render() {
    const { container, text } = styles;
    return (
      <View style={container}>
        <QRCodeScanner
          onRead={this.onSuccess.bind(this)}
          topContent={<Text style={text}>Scan any QR Code</Text>}
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.text}>OK. Got it!</Text>
            </TouchableOpacity>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "#ffffff"
  },
  textBold: {
    fontWeight: "500",
    color: "#000"
  },
  buttonText: {
    fontSize: 21,
    color: "rgb(0,122,255)"
  },
  buttonTouchable: {
    padding: 16
  },
  container: {
    flex: 1,
    backgroundColor: "#1c3469",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ScanPage;
