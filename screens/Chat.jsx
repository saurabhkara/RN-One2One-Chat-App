import { View, Text, StyleSheet } from "react-native";
import React, {
  useCallback,
  useState,
  useEffect,
  useLayoutEffect,
} from "react";
import {
  collection,
  addDoc,
  setDoc,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import { auth, database } from "../config/firebase";
import { GiftedChat } from "react-native-gifted-chat";

export default function Chat() {
  const [messages, setMessages] = useState([]);

  useLayoutEffect(() => {
    const collectionRef = collection(database, "chat");
    const q = query(collectionRef, () => orderBy("createdAt", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      console.log("snapShop", snapshot.docs);
      console.log('Rendering each time+++++++++++++++++++++++++++++++++=')
      setMessages(
        snapshot.docs.map((doc) => ({
          _id: doc.id,
          createdAt: doc.data().createdAt,
          text: doc.data().text,
          user: doc.data().user,
        }))
      );
    });

    return () => unsubscribe();
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];

    addDoc(collection(database, "chat"), {
      _id,
      createdAt: Date.parse(createdAt),
      text,
      user,
    });
  }, []);

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages.sort((a, b) => b.createdAt - a.createdAt)}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: auth?.currentUser?.email,
          avatar: "https://placeimg.com/140/140/any",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
