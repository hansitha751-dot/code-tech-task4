// Register Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("Service Worker Registered"));
}

// Notification
function showNotification() {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      new Notification("🛍️ New Offer!", {
        body: "Check out our latest deals!",
      });
    }
  });
}