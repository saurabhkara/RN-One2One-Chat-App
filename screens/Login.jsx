import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function Login({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Login Successful", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Login failed", errorMessage);
          Alert.alert('login failed')
        });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text}>Email</Text>
        <TextInput
          placeholder="Please enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          placeholder="Please enter your password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={onHandleLogin}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Don't have account
          <Text
            style={{ color: "blue" }}
            onPress={() => navigation.navigate("signup")}
          >
            {" "}
            Signup
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingVertical: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#d6d6d4",
    height: 50,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    marginVertical: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "cyan",
    height: 50,
    marginTop: 30,
    borderRadius: 15,
  },
});
