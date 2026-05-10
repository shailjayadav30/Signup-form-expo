import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { Link } from "expo-router";

const Signin = () => {
  const inputValues = [
    {
      name: "Email Address",
      key: "email",
      placeholder: "Enter your email",
      icon: "mail-outline",
    },
    {
      name: "Password",
      key: "password",
      placeholder: "Enter your password...",
      icon: "lock-closed-outline",
    },
  ];
  const social = [
    { icon: "logo-google", key: "google" },
    { icon: "logo-facebook", key: "facebook" },
    { icon: "logo-instagram", key: "instagram" },
  ];
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Image
          style={{
            height: 100,
            width: 100,
          }}
          source={require("../../assets/images/image.png")}
          contentFit="cover"
        />
        <Text>Sign In</Text>
        <Text>Let&apos;s experience the joy of telecare AI.</Text>
      </View>

      <View>
        {inputValues.map((value, idx) => (
          <View key={idx}>
            <Ionicons size={32} color="black" name={value.icon as any} />
            <TextInput placeholder={value.placeholder} />
          </View>
        ))}
      </View>
      <Pressable>
        <Text>Sign Up</Text>
        <Ionicons name="arrow-forward-outline" color="white" size={32} />
      </Pressable>
      <View>
        {social.map((value, idx) => (
          <View key={idx}>
            <Ionicons name={value.icon as any} size={32} color="black" />
          </View>
        ))}
      </View>
      <View>
        <Text>Don&apos;t have an account?</Text>
        <Link href="/components/Signup">Sign Up.</Link>
        <Link href="/components/Forgot">Forgot your password</Link>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signin;

const styles = StyleSheet.create({
    container:{
        backgroundColor:"red"
    }
});
