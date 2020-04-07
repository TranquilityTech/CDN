self.addEventListener("push", e => {
    const options = e.data.json();

    self.registration.showNotification(options.title, options);
});
