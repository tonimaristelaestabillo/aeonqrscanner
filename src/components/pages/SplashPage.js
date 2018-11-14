import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

class SplashPage extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> This is the SplashPage </Text>
        <Button
          title="Login"
          onPress={() => navigation.navigate("Dashboard")}
        />
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

export default SplashPage;
