import * as Facebook from "expo-facebook";
import globals from "../config/globals"

class facebookService {
    private _instance = Facebook;

    public logInWithReadPermissionsAsync = () => this._instance.logInWithReadPermissionsAsync(globals.facebook.appId, {permissions: globals.facebook.requiredPermissions})
        .catch(error => console.log(error))
}

export default new facebookService();
