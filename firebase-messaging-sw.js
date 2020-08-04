// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');


 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAvnTbcW95in1kLTtfxsAmLngVCi30ifnY",
    authDomain: "chat-app-bee29.firebaseapp.com",
    databaseURL: "https://chat-app-bee29.firebaseio.com",
    projectId: "chat-app-bee29",
    storageBucket: "chat-app-bee29.appspot.com",
    messagingSenderId: "418942585315",
    appId: "1:418942585315:web:abb10ef5f2518d509cf8d6",
    measurementId: "G-RH26FT03RX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});



