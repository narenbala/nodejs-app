const express = require('express')

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/firestore");

const app = express()
const port = 3000

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
    apiKey: "AIzaSyAkezqX_kRbOXgAW9LxTHu6EawUG0TOK1s",
    authDomain: "nodejs-85125.firebaseapp.com",
    projectId: "nodejs-85125",
    storageBucket: "nodejs-85125.appspot.com",
    messagingSenderId: "1000860374222",
    appId: "1:1000860374222:web:fae94dc0b1c75eca85ac9f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

app.set('view engine', 'ejs')

app.use(express.static('public'))

var db = firebase.firestore();

// db.collection("online course").add({
//     title: 'react',
//     days: 20,
//     fees: 4000
// })
// .then((docRef) => {
//     // console.log("Document ref: ", docRef);
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });

db.collection("online course").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const title = doc.data().title;
        const days = doc.data().days;
        const fees = doc.data().fees;
    });
});

app.get('/', (req, res) => {

    const list = [
        {title: 'html', days: 15 , fees: 3000},
        {title: 'css', days: 25, fees: 3000},
        {title: 'javascript', days: 30, fees: 5000},
        {title: 'react', days: 20, fees: 4000}
    ]

    res.render('pages/home', {
        list: list,
    })
})

app.get('/html', (req, res) => {
    res.render('pages/html')
})

app.get('/css', (req, res) => {
    res.render('pages/css')
})

app.get('/javascript', (req, res) => {
    res.render('pages/javascript')
})

app.get('/react', (req, res) => {
    res.render('pages/react')
})

app.listen(port, () => {
    console.log(`app is listening at port ${port}`)
})