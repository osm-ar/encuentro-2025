// Service Worker para Encuentro OSM Argentina 2025
// Proporciona funcionalidad básica offline

const CACHE_NAME = 'osm-argentina-2025-v1';
const urlsToCache = [
    '/',
    '/assets/css/main.css',
    '/assets/js/main.js',
    '/assets/img/osm-ar-logo.png',
    '/programa/',
    '/sponsors/',
    '/faq/',
    '/participar/'
];

// Install event - cache core resources
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('SW: Cache opened');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Return cached version or fetch from network
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
        )
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        console.log('SW: Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});