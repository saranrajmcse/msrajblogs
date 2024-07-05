let firebaseConfig = {
    apiKey: "AIzaSyCa6Mq2oBja15JBwV9qtxaxpHxkJuESCUk",
    authDomain: "msrajblogs.firebaseapp.com",
    projectId: "msrajblogs",
    storageBucket: "msrajblogs.appspot.com",
    messagingSenderId: "452821878882",
    appId: "1:452821878882:web:26c6c77f282fb7d994a93b"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();