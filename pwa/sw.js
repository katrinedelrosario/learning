//
const staticCacheName = 'site-static'

const assets = [
	'./',
	'./index.html',
	'./js/app.js',
	'./js/ui.js',
	'./js/materialize.min.js',
	'./css/styles.css',
	'./css/materialize.min.css',
	'./img/dish.png'
]

// install service worker
self.addEventListener('install', event => {
	//console.log('service worker has been installed');

	event.waitUntil(
		caches.open(staticCacheName).then(cache => {
			//console.log('cahing all assets');
			cache.addAll(assets)
		})
	)
})

// activate service worker
self.addEventListener('activate', event => {
	console.log('service worker has been activated');
	event.waitUntil(
		caches.keys().then(keys => {
			return Promise.all(keys.filter(key => key !== staticCacheName).map(key => caches.delete(key)))
		})
		)
	})

// fetch
self.addEventListener('fetch', event => {
	//console.log('Fetch event', event)
	console.log(event.request);
	event.respondWith(
		caches.match(event.request).then(cacheRes => {
			return cacheRes || fetch(event.request)
		})
	)
})

