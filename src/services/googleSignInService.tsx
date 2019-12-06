import * as GoogleSignIn from 'expo-google-sign-in';
import globals from "../config/globals"

class googleSignInService {
    private _instance = GoogleSignIn;

    constructor(){
        this.init();
    }

    init = async () => {
        try {
            await this._instance.initAsync({ clientId: globals.googleSignIn.reservedClientId });
        } catch ({ message }) {
            alert('GoogleSignIn.initAsync(): ' + message);
        }
    }

    signInAsync = async () => {
        try {
            await this._instance.askForPlayServicesAsync();
            const { type, user } = await this._instance.signInAsync();
            if (type === 'success') {
                // ...
            }
        } catch ({ message }) {
            alert('login: Error:' + message);
        }
    };

    signOutAsync = async () => {
        try {
            await this._instance.signOutAsync();
        } catch ({ message }) {
            alert('signOutAsync: ' + message);
        }
    };
}

export default new googleSignInService();
