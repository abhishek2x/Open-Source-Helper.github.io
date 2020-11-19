import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC0fK4vh5vzUIr3CPAbeRCeu0xhdnKMKmY",
  authDomain: "open-source-8f341.firebaseapp.com",
  databaseURL: "https://open-source-8f341.firebaseio.com",
  projectId: "open-source-8f341",
  storageBucket: "open-source-8f341.appspot.com",
  messagingSenderId: "222019736897",
  appId: "1:222019736897:web:31a2fdc37e6b97829dbdc0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const providerGoogle = new firebase.auth.GoogleAuthProvider()
var providerGitHub = new firebase.auth.GithubAuthProvider();

export { auth, providerGitHub, providerGoogle }