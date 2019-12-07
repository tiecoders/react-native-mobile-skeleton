const globals = {
    api: {
        baseURL: 'http://api.local-project.com/',
        timeout: 10000
    },
    googleSignIn: {
        reservedClientId: "com.googleusercontent.apps.478495107335-8otokt8d1cq8qdpfgr6j1tr8roc6ka78"
    },
    navigation: {
        redirectAfterLogIn: 'home',
        initialRouteKey: 'signIn'
    },
    source: null,
    facebook: {
        appId: "2490241437754714",
        requiredPermissions: ['public_profile', 'email', 'user_birthday', 'user_gender']
    },
    firebase: {
        apiKey: "AIzaSyB5G0opHWneGzm4vku5_pi6zBLhkoyC_Kk",
        authDomain: "casa-ns.firebaseapp.com",
        databaseURL: "https://casa-ns.firebaseio.com",
        storageBucket: "casa-ns.appspot.com"
    },
    users: {
        default: {
            picture_url: '',
            picture_height: '',
            picture_width: ''
        }
    }
}

export default globals
