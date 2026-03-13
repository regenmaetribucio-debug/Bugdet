const CACHE_NAME = "Budget-Tracker-App-v1";

self.addEventListener("install", function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(["index.html", "manifest.json"])
        })
    );
});

self.addEventListener("fetch", function (e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        }).catch(function() {
            return caches.match("index.html");
        })
    );
});