import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CarItem from "./components/carItem/Index";
import CarsList from "./components/CarsList/Index";
import Header from "./components/header/Index";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import { NativeBaseProvider } from "native-base";
import ServiceScreen from "./screens/ServiceScreen";
import Profile from "./screens/Profile";

const Drawer = createDrawerNavigator();
const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};

export default function App() {
  return (
    <NativeBaseProvider config={config}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Profile">
          <Drawer.Screen name={"Profile"} component={Profile} />
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Services" component={ServiceScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
