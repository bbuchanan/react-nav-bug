import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Navigation } from "react-native-navigation";
import ScreenOne from "./src/screens/Screen1";
import ScreenTwo from "./src/screens/Screen2";
import ScreenThree from "./src/screens/Screen3";
import NavView from "./src/NavView";
import startTabs from "./startTabs";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

Navigation.registerComponent("nav-bug.Screen1", () => ScreenOne);
Navigation.registerComponent("nav-bug.Screen2", () => ScreenTwo);
Navigation.registerComponent("nav-bug.Screen3", () => ScreenThree);
Navigation.registerComponent("nav-bug.NavView", () => NavView);

startTabs();
