// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwOMzN4XiQP842jz3F9k7YWsmn81FP57s",
  authDomain: "pirate-tube-login.firebaseapp.com",
  projectId: "pirate-tube-login",
  storageBucket: "pirate-tube-login.firebasestorage.app",
  messagingSenderId: "424991145206",
  appId: "1:424991145206:web:b79d9747df9808b2dc40d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submit = document.getElementById('submit');
submit.addEventListener("click",(event)=>{
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert(`Welcome ${name}`);
        window.location.href = "https://pirates0247.github.io/PiratesTubeLight/"
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Your account has been hacked :(`);
        // ..
    });
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert(`Welcome ${name}`);
      window.location.href = "https://pirates0247.github.io/PiratesTubeLight/"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Your account has been hacked :(`);
    });
});

