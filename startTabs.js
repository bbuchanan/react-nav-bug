import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import navBarStyle from "./navBarStyle";

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-home", 30),
    Icon.getImageSource("md-menu", 30),
    Icon.getImageSource("md-apps", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "nav-bug.Screen1",
          label: "Screen 1",
          icon: sources[0],
          navigatorStyle: navBarStyle
        },
        {
          screen: "nav-bug.Screen2",
          label: "Screen 2",
          icon: sources[1],
          navigatorStyle: navBarStyle
        },
        {
          screen: "nav-bug.Screen3",
          label: "Screen 3",
          icon: sources[2],
          navigatorStyle: navBarStyle
        }
      ],
      tabsStyle: {
        tabBarSelectedButtonColor: "orange"
      },
      appStyle: {
        tabBarSelectedButtonColor: "orange"
      }
    });
  });
};

export default startTabs;
