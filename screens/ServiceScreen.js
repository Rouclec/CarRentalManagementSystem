import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";

const ServiceScreen = (props) => {
  return (
    <>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30, fontWeight: "500" }}>Featured Cars</Text>
      </View>
      <ScrollView
        style={{
          margin: 5,
          flexDirection: "column",
          position: "abosolute",
          //   alignItems: "center",
          //   justifyContent: "center",
          top: 20,
        }}
      >
        <View
          style={{
            width: 380,
            height: 300,
            backgroundColor: "#fff",
            borderRadius: 20,
            margin: 10,
          }}
        >
          <ImageBackground
            source={require("../assets/images/ModelX.jpeg")}
            style={{
              width: 375,
              height: 295,
              borderRadius: 20,
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 50,
              }}
            >
              <Text style={{ fontSize: 30, fontWeight: "600" }}>
                Tesla Model X
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            width: 380,
            height: 300,
            backgroundColor: "#fff",
            borderRadius: 20,
            margin: 10,
          }}
        >
          <ImageBackground
            source={require("../assets/images/Model3.jpeg")}
            style={{
              width: 375,
              height: 295,
              borderRadius: 20,
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 50,
              }}
            >
              <Text style={{ fontSize: 30, fontWeight: "600" }}>Toyota</Text>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            width: 380,
            height: 300,
            backgroundColor: "#fff",
            borderRadius: 20,
            margin: 10,
          }}
        >
          <ImageBackground
            source={require("../assets/images/ModelS.jpeg")}
            style={{
              width: 375,
              height: 295,
              borderRadius: 20,
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 50,
              }}
            >
              <Text style={{ fontSize: 30, fontWeight: "600" }}>
                Tesla Model 3
              </Text>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ServiceScreen;
