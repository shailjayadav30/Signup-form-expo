import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";

const Signup = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });
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
    {
      name: "Password Confirmation",
      key: "confirmPassword",
      placeholder: "Confirm password",
      icon: "lock-closed-outline",
    },
  ];
  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Image
                style={styles.logo}
                source={require("../../assets/images/image.png")}
                contentFit="cover"
              />
              <Text style={styles.heading}>Sign Up For Free</Text>
              <Text style={styles.subHeading}>
                Sign up in 1 minute for free!
              </Text>
            </View>
            {/* Email */}
            <View style={styles.fieldGrp}>
              <Text style={styles.label}>Email Address</Text>
              <View style={styles.inputBox}>
                <Ionicons size={20} color="#aaa" name="mail-outline" />
                <TextInput
                  style={styles.input}
                  value={formValue.email}
                  placeholder="Enter your email"
                  placeholderTextColor="#bbb"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={(text) =>
                    setFormValue((prev) => ({
                      ...prev,
                      email: text,
                    }))
                  }
                />
              </View>
            </View>

            {/* Password */}
            <View style={styles.fieldGrp}>
              <Text style={styles.label}>Password </Text>
              <View style={[styles.inputBox]}>
                <Ionicons size={20} color="#aaa" name="lock-closed-outline" />
                <TextInput
                  style={styles.input}
                  value={formValue.password}
                  placeholder="Enter your password..."
                  placeholderTextColor="#bbb"
                  // secureTextEntry={!showPassword}
                  onChangeText={(text) =>
                    setFormValue((prev) => ({
                      ...prev,
                      password: text,
                    }))
                  }
                />
              </View>
            </View>
            {/* confirm pass */}
            <View style={styles.fieldGrp}>
              <Text style={styles.label}>Confirm Password </Text>
              <View style={[styles.inputBox]}>
                <Ionicons size={20} color="#aaa" name="lock-closed-outline" />
                <TextInput
                  style={styles.input}
                  value={formValue.password}
                  placeholder="Enter your password..."
                  placeholderTextColor="#bbb"
                  // secureTextEntry={!showPassword}
                  onChangeText={(text) =>
                    setFormValue((prev) => ({
                      ...prev,
                      confirmPass: text,
                    }))
                  }
                />
              </View>
            </View>

            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>Sign Up</Text>
              <Ionicons name="arrow-forward-outline" color="white" size={32} />
            </Pressable>

            <View style={styles.allready}>
              <Text style={styles.text}>Already have an account?</Text>
              <Link style={styles.link} href="/components/SignIn">
                Sign In.
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f5f5f0",
  },
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
  },
  container: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    gap: 14,
  },
  header: {
    alignItems: "center",
    marginBottom: 8,
    gap: 4,
  },
  logo: {
    height: 70,
    width: 70,
    marginBottom: 10,
  },
  heading: {
    color: "#1a1a1a",
    fontSize: 28,
    fontWeight: "700",
  },
  subHeading: {
    color: "#999",
    fontSize: 13,
    fontWeight: "400",
  },
  fieldGrp: {
    gap: 6,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 18,
    backgroundColor: "white",
    gap: 8,
    borderWidth: 1.5,
    borderColor: "#e8e8e8",
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#1a1a1a",
    padding: 0,
  },
  btn: {
    backgroundColor: "#86CC1B",
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 10,
    marginTop: 4,
  },
  btnText: {
    fontSize: 15,
    fontWeight: "700",
    color: "white",
  },
  allready: {
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
    marginTop: 4,
  },
  text: {
    fontSize: 13,
    color: "#888",
  },
  link: {
    fontSize: 13,
    color: "#86CC1B",
    textDecorationLine: "underline",
    fontWeight: "500",
  },
});

// <View>
//             {inputValues.map((value, idx) => (
//               <>
//                 <Text key={idx}>{value.name}</Text>
//                 <View style={styles.inputBox}>
//                   <Ionicons
//                     size={20}
//                     color="black"
//                     name={value.icon as any}
//                   />
//                   <TextInput
//                     value={formValue[value.key as keyof typeof formValue]}
//                     placeholder={value.placeholder}
//                     placeholderTextColor="#5F5E63"
//                     secureTextEntry={["password", "confirmPassword"].includes(
//                       value.key,
//                     )}
//                     onChangeText={(text) =>
//                       setFormValue((prev) => ({
//                         ...prev,
//                         [value.key]: text,
//                       }))
//                     }
//                   />
//                 </View>
//               </>
//             ))}
//           </View>
