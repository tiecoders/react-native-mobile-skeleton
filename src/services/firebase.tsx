import * as firebase from 'firebase';
import globals from "../config/globals"

firebase.initializeApp(globals.firebase);

export default firebase
