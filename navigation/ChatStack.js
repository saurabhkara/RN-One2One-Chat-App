import Home from "../screens/Home";
import Chat from "../screens/Chat";

const ChatStack = (Stack) => {
    return (
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen component={Home} name="home" />
        <Stack.Screen component={Chat} name="chat" />
      </Stack.Navigator>
    );
};

export default ChatStack;