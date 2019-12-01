import HomeScreen from "../components/screens/HomeScreen";
import SignInScreen from "../components/screens/SignInScreen/SignInScreen";
import SignUpScreen from "../components/screens/SignUpScreen";

const routes = {
    navigation: {
        signIn: SignInScreen,
        signUp: SignUpScreen,
        home: HomeScreen
    },
    bottom:{
        home: HomeScreen
    }
}

export default routes
