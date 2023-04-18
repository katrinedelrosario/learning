// install service worker
self.addEventListener('install', event => {
	console.log('Service Worker has been installed');
})

// activate service worker
self.addEventListener('activate', event => {
	console.log('Service Worker has been activated');
})

// fetch
self.addEventListener('fetch', event => {
	console.log('Fetch event', event)
})

