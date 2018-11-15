import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Header } from "../common";
import { DrawerActions } from "react-navigation";

class DashboardPage extends Component {
  render() {
    const { navigation } = this.props;
    const { container, text } = styles;
    return (
      <View style={container}>
        <Header
          primaryColor="#ffffff"
          headerTextColor="#1c3469"
          label="Dashboard"
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.openDrawer())
          }
        />
        <View style={container}>
          {/* Header */}

          <Text style={text}> This is the DashboardPage </Text>
          <Button title="Scan QR" onPress={() => navigation.navigate("Scan")} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c3469",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#ffffff",
    padding: 20
  }
});

export default DashboardPage;
