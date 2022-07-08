import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import SocialButton from "../components/SocialButton";
import { db, auth } from "../auth/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { AntDesign } from "@expo/vector-icons";
const LoginScreen = (props) => {
  const [email, setEmail] = React.useState("senatorasonganyi97@gmail.com");
  const [password, setPassword] = React.useState("@admin123");

  const navigation = useNavigation();

  const signIn = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        alert("Sign in successfull");
        navigation.navigate("Home");
      })
      .catch((error) => {
        alert(`${error.code} Sign in Error ${error.message}`);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
      <FormInput
        placeholder={"Email"}
        iconName={"user"}
        onChangeText={(text) => {
          setEmail(text);
        }}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        input="email"
      />
      <FormInput
        placeholder={"Password"}
        iconName={"lock"}
        onChangeText={(text) => {
          setPassword(text);
        }}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
      />

      <FormButton buttonTitle={"Sign In"} onPress={signIn} />

      <TouchableOpacity
        style={{ marginVertical: 10 }}
        onPress={() => {
          alert("Go to Forgot password Screen");
        }}
      >
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>
      <SocialButton
        buttonTitle="Sign In with Facebook"
        buttonType="facebook"
        color="#4867aa"
        backgroundColor={"#e6eaf4"}
        onPress={() => alert("Facebook Signin")}
      />
      <SocialButton
        buttonTitle="Sign In with Google"
        buttonType="google"
        color="#de4d41"
        backgroundColor={"#f5e7ea"}
        onPress={() => alert("Google Signin")}
      />
      <TouchableOpacity
        style={{ marginVertical: 10 }}
        onPress={() => {
          navigation.navigate("Signup");
        }}
      >
        <Text style={styles.navButtonText}>
          Don't have an account? create here
          <AntDesign name="arrowdown" size={24} color={"black"} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9fafd",
    padding: 20,
  },
  logoContainer: {
    width: 80,
    borderWidth: 1,
    borderColor: "#344034",
    borderRadius: 60,
    marginBottom: 30,
    alignSelf: "flex-start",
  },
  logo: {
    height: 80,
    width: 80,
  },
  text: {
    top: -15,
    left: 1,
    fontFamily: "Kufum-SemiBoldItalic",
    fontSize: 28,
    marginBottom: 20,
    color: "#344034",
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
    fontFamily: "Lato-Regular",
  },
  forgotButton: {},
  navButtonText: {
    color: "#1f2770",
  },
  skipText: {
    color: "#493d8a",
  },
});
export default LoginScreen;
