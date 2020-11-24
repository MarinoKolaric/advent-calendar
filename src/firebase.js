import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import dotenv from "dotenv";

dotenv.config();

const config = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

export const googleProvider = new firebase.auth.GoogleAuthProvider();

class Firebase {
  constructor() {
    this.auth = firebase.auth(config);
    this.db = firebase.database();
  }

  // Login
  async login() {
    const user = firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const token = result.credential.accessToken;
        const user = result.user;
        
        this.addUser(user.uid, user.displayName);

        return user;
      })
      .catch((error) => {
        console.log("error", error);
      });

    return user;
  }

  // Logout
  async logout() {
    firebase
      .auth()
      .signOut()
      .catch((error) => {
        console.log("error on signout", error);
      });
  }

  // Add user
  addUser(uid, name) {
    firebase
      .database()
      .ref("users/" + uid)
      .set({
        username: name,
        uid: uid,
      });
  }


}

export default new Firebase();