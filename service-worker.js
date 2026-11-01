self.addEventListener("push", function (event) {
  let data = {};

  if (event.data) {
    data = event.data.json();
  }

  event.waitUntil(
    self.registration.showNotification(
      data.title || "Keypress Typing Agency",
      {
        body: data.body || "আপনার জন্য নতুন নোটিফিকেশন এসেছে।",
        icon: "/favicon.ico",
        data: { url: data.url || "/" }
      }
    )
  );
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();

  event.waitUntil(
    clients.openWindow(event.notification.data.url || "/")
  );
});
