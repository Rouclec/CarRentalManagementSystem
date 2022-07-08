import React, { Component } from "react";
import { View, Text, ImageBackground, TextInput, Image } from "react-native";
import styles from "./styles";
import StyledButton from "../styledButton/Index";
import { Button, Center, Modal } from "native-base";

const CarItem = (props) => {
  const { title, subtitle, backgroundImage, subtitleCTA } = props.car;
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <>
      <View style={styles.carContainer}>
        <ImageBackground source={backgroundImage} style={styles.image} />
        <View style={styles.titles}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>
            {subtitle}
            <Text style={styles.subtitleCTA}>{subtitleCTA}</Text>
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          <StyledButton
            type="primary"
            content="custom order"
            onPress={() => {
              setModalOpen(true);
            }}
          />
        </View>
      </View>
      <Modal isOpen={modalOpen}>
        <Modal.Content maxWidth={"1000px"} width={"350px"} mb="auto" mt={12}>
          <Modal.CloseButton
            onPress={() => {
              setModalOpen(false);
            }}
          />
          <Modal.Body>
            <View>
              <View
                style={{
                  justifyContent: "cetner",
                  alignItems: "center",
                  marginVertical: 30,
                }}
              >
                <Text style={{ fontSize: 30, fontWeight: "600" }}>
                  Clean Power,
                </Text>
                <Text style={{ fontSize: 30, fontWeight: "600" }}>
                  Outage Protection
                </Text>
              </View>

              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text>Home Address</Text>
                <TextInput
                  placeholder="Home Address"
                  style={{
                    width: "100%",
                    height: 50,
                    borderWidth: 1,
                    borderRadius: "50%",
                    marginBottom: 10,
                    paddingHorizontal: 10,
                  }}
                />
                <Text>Enter Mobile Money Number</Text>
                <View style={{ flexDirection: "row" }}>
                  <TextInput
                    placeholder="Home Address"
                    keyboardType="numeric"
                    style={{
                      width: "90%",
                      height: 50,
                      borderWidth: 1,
                      borderTopLeftRadius: "50%",
                      borderBottomLeftRadius: "50%",
                      borderRightWidth: 0,
                      marginBottom: 10,
                      paddingHorizontal: 10,
                    }}
                  />
                  <Image
                    style={{
                      width: "10%",
                      height: 50,
                      borderTopRightRadius: "50%",
                      borderBottomRightRadius: "50%",
                    }}
                    source={require("../../assets/images/download.jpeg")}
                  />
                </View>
                <Text style={{ fontSize: 20, fontWeight: "500" }}>
                  Unit Price: XAF 25,000 / day
                </Text>
                <Text style={{ textDecorationLine: true, marginVertical: 10 }}>
                  My home is new or being built
                </Text>
                <Button
                  borderRadius={50}
                  h={50}
                  w={300}
                  my={10}
                  onPress={() => alert("Order Sent")}
                >
                  Rent Now
                </Button>
                <Text>We won't spam you in any way</Text>
              </View>
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default CarItem;
