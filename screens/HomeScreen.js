import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CarsList from "../components/CarsList/Index";
import Header from "../components/header/Index";

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
