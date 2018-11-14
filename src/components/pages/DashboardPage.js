import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

class DashboardPage extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> This is the DashboardPage </Text>
        <Button title="Scan QR" onPress={() => navigation.navigate("Scan")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default DashboardPage;
