import HomeScreen from "../components/screens/HomeScreen";
import SignInScreen from "../components/screens/SignInScreen/SignInScreen";
import SignUpScreen from "../components/screens/SignUpScreen/SignUpScreen";

const routes = {
    navigation: {
        signUp: SignUpScreen,
        signIn: SignInScreen,
        home: HomeScreen
    },
    bottom:{
        home: HomeScreen
    }
}

export default routes
