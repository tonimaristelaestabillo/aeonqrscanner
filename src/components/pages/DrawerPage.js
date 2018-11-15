import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Platform } from "react-native";
import { NavigationActions } from "react-navigation";

class DrawerPage extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        {/* Main Pages */}
        <View style={{ paddingHorizontal: 40 }}>
          <Text
            onPress={() => navigation.navigate("Splash")}
            style={styles.drawerItem}
          >
            Splash
          </Text>
          <Text
            onPress={() => navigation.navigate("Dashboard")}
            style={styles.drawerItem}
          >
            Dashboard
          </Text>
          <Text
            onPress={() => navigation.navigate("Scan")}
            style={styles.drawerItem}
          >
            Scan
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 50
  },
  drawerItem: {
    fontSize: Platform.OS === "ios" ? 15 : 12,
    marginBottom: Platform.OS === "ios" ? 20 : 10
  },
  imageContainerStyle: {
    height: Platform.OS === "ios" ? 120 : 100,
    resizeMode: "contain",
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: {
    height: Platform.OS === "ios" ? 120 : 100,
    width: Platform.OS === "ios" ? 120 : 100,
    borderRadius: 60
  },
  barStyle: {
    backgroundColor: "#2932A0",
    width: "75%",
    height: 3,
    alignSelf: "flex-end",
    opacity: 0.3
  }
});

export default DrawerPage;
