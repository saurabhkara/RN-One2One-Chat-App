import { useState, useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, ActivityIndicator } from "react-native";
import { AuthenticationUserContext } from "../context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import ChatStack from "./ChatStack";
import AuthStack from "./AuthStack";

const Stack = createNativeStackNavigator();

function RootNavigation() {
  const [userA, setUserA] = useContext(AuthenticationUserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authenticatedUser) => {
      authenticatedUser ? setUserA(authenticatedUser) : setUserA(null);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [userA]);

  if (loading) {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={"large"} />
    </View>;
  }

  return (
    <NavigationContainer>
      {userA ? ChatStack(Stack) : AuthStack(Stack)}
    </NavigationContainer>
  );
}

export default RootNavigation;