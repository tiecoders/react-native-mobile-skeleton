import * as _firebase from 'firebase';
import globals from "../config/globals"

class firebaseService {
    private _instance = _firebase;

    constructor() {
        _firebase.initializeApp(globals.firebase);
    }

    public pushNewUser = (uid, data) => {
        this._instance.database().ref('users/' + uid).set(data)
    }

    public onStateChangedEvent = (navigation, signInRequired) => {
        this._instance.auth().onAuthStateChanged(user => {
            console.log('user: ' + (user !== null ? 'yes' : 'no') + ' and signIsRequired : ' + signInRequired)
            if (user !== null && signInRequired === false) {
                console.log('yes')
                navigation.navigate({routeName: globals.navigation.redirectAfterLogIn})
            } else if (user === null && signInRequired === true) {
                console.log('no')
                navigation.navigate({routeName: globals.navigation.initialRouteKey})
            }
        });
    }
    
    public getFacebookAuthProvider = token => this._instance.auth.FacebookAuthProvider.credential(token);

    public signInWithCredential = token => {
        const credential = this.getFacebookAuthProvider(token);
        this._instance.auth().signInWithCredential(credential).then((credential) => {
            const UserInfo = credential.additionalUserInfo;
            const user = credential.user;

            if (UserInfo && UserInfo.isNewUser) {
                const data = {
                    fname: UserInfo.profile["first_name"],
                    lname: UserInfo.profile["last_name"],
                    gender: UserInfo.profile["gender"],
                    displayName: user.displayName,
                    picture: {
                        url: UserInfo.profile["picture"].data.url,
                        height: UserInfo.profile["picture"].data.height,
                        width: UserInfo.profile["picture"].data.width
                    },
                    email: user.email,
                    birthday: UserInfo.profile["birthday"]
                }

                this.pushNewUser(user.uid, data)
            }
        }).catch((error) => {
            // Handle Errors here.
            alert('Errors here: ' + error)
        });
    }

    public signOut = () => {
        this._instance.auth().signOut();
    }
}

export default new firebaseService()
