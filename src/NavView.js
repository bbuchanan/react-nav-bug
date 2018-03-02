import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  navText: {
    backgroundColor: "#001327",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 7,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 8,
    paddingLeft: 8,
    borderWidth: 2,
    borderColor: "white"
  }
});

const NavView = () => (
  <View style={styles.containerStyle}>
    <Text style={styles.navText}>Title Text!</Text>
  </View>
);

export default NavView;
