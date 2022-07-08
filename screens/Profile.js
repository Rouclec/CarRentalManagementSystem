import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import LoginScreen from "./Login";
import SignupScreen from "./SignUp";

const Profile = (props) => {
  const { height } = useWindowDimensions();
  return (
    <ScrollView style={styles.container}>
      <View height={height}>
        <LoginScreen />
      </View>
      <View height={height}>
        <SignupScreen />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Profile;
