import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { useState, useContext } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthenticationUserContext } from "../App";

export default function Signup({ navigation }) {
  const[user, setUser] = useContext(AuthenticationUserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleSignup = async () => {
    if (email !== "" && password !== "") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const signedUser = userCredential.user;
          console.log("Signed up",signedUser);
          // setUser(signedUser)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("failed to Signed up", errorMessage);
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
          onPress={onHandleSignup}
        >
          <Text>Signup</Text>
        </TouchableOpacity>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Already have account
          <Text
            style={{ color: "blue" }}
            onPress={() => navigation.goBack("login")}
          >
            {" "}
            Login
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
