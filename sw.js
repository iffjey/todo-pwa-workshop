self.addEventListener('fetch', function(event) {
  console.log('in fetch');
  event.respondWith(
    console.log('in respond');
    caches.match(event.request).then(function(response) {
      console.log('in matches');
      // Cache hit - return response
      if (response) {
        return response;
      }

      console.log('not responded');
      return fetch(event.request);
    })
  );
});
