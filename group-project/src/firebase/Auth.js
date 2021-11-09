import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

class Firebase {
    constructor() {
        firebase.initializeApp({
            apiKey: "AIzaSyCpzPFowpYpN413Edo9ELhiSUZJ63gisUo",
            authDomain: "myproject-d5a15.firebaseapp.com",
            databaseURL: "https://myproject-d5a15.firebaseio.com",
            projectId: "myproject-d5a15",
            storageBucket: "myproject-d5a15.appspot.com",
            messagingSenderId: "386258886838",
            appId: "1:386258886838:web:3daf2c5cf36ac7525fc617",
            measurementId: "G-5HGCEJKXEN"
        })

    }

    loginChecking = (login, unlogin) => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log("loggined")
                var uid = user.uid;
                login(uid, true)

            } else {
                console.log("User is signed out")
                unlogin(false)

            }
        });
    }

    createNewUser = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
    }
}

const fire_base = new Firebase()
export default fire_base