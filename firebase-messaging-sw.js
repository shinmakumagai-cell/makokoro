importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBwyzUWmSrCfTEBEUHdY1phxPjK5A-JOXo",
  authDomain: "magokorokinntai.firebaseapp.com",
  databaseURL: "https://magokorokinntai-default-rtdb.firebaseio.com",
  projectId: "magokorokinntai",
  storageBucket: "magokorokinntai.firebasestorage.app",
  messagingSenderId: "262026754561",
  appId: "1:262026754561:web:49229fb5676b2bd2665e00"
});

const messaging = firebase.messaging();

// バックグラウンド通知
messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: '/makokoro/icon.png',
    badge: '/makokoro/icon.png',
    vibrate: [200, 100, 200],
    tag: 'makokoro-notification',
    renotify: true,
  });
});
