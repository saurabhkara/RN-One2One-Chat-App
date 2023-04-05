import Login from "../screens/Login";
import Signup from "../screens/Signup";

const AuthStack = (Stack) => {
    return (
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup} />
      </Stack.Navigator>
    );
};

export default AuthStack;