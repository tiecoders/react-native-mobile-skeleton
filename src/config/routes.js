import HomeScreen from "../components/screens/HomeScreen";
import {SignInScreen} from "../components/screens/SignInScreen/SignInScreen";

const routes = {
    navigation: {
        signIn: SignInScreen,
        home: HomeScreen,
    },
    bottom:{
        home: HomeScreen
    }
}

export default routes
