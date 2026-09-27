self.addEventListener("push", function(event) {

  let data = {};

  try {
    data = event.data ? event.data.json() : {};
  } catch (error) {
    data = {};
  }

  const title =
    data.title || "Daglig selvransagelse";

  const options = {
    body:
      data.body ||
      "Det er tid til din daglige selvransagelse.",
    icon: "./icon-192.png",
    badge: "./icon-192.png"
  };

  event.waitUntil(
    self.registration.showNotification(
      title,
      options
    )
  );

});
