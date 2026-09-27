importScripts('https://www.gstatic.com/firebasejs/11.10.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.10.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAT3yL3DLsbP2X09LlVVdtRYblBEu2PQB4",
  authDomain: "daglig-selvransagelse.firebaseapp.com",
  projectId: "daglig-selvransagelse",
  storageBucket: "daglig-selvransagelse.firebasestorage.app",
  messagingSenderId: "719561955217",
  appId: "1:719561955217:web:9cf07b4916be3a47756c30"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title =
    payload.notification?.title || "Daglig selvransagelse";

  const options = {
    body:
      payload.notification?.body ||
      "Det er tid til din daglige selvransagelse."
  };

  self.registration.showNotification(title, options);
});
