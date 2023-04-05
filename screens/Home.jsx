import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
export default function Home({ navigation }) {

  const onSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Successfully Signned out");
      })
      .catch(() => {
        console.log("Failed to signned out");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to One2One Chat</Text>
      <Text style={{textAlign}}>Task 05-04-2023</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("chat")}
      >
        <Text style={{ color: "white", fontSize: 18 }}>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onSignOut}>
        <Text style={{ color: "white", fontSize: 18 }}>Signout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent:'center',
    alignItems: "center",
    flex: 1,
  },
  header: {
    fontSize: 22,
    color: "blue",
    marginVertical: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "cyan",
    padding: 10,
    height: 50,
    width: 100,
    marginVertical: 50,
    borderRadius: 10,
  },
});
