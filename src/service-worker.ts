/// <reference types="@sveltejs/kit" />
/// <reference lib="webworker" />

declare let self: ServiceWorkerGlobalScope;

import { build, files, version, prerendered } from '$service-worker';

const CACHE = `cache-${version}`;
const ASSETS = [...build, ...files, ...prerendered];

// Install the service worker
self.addEventListener('install', (e) => {
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
	}

	e.waitUntil(addFilesToCache());
});

// Actiavte service workder
self.addEventListener('activate', (e) => {
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key != CACHE) {
				await caches.delete(key);
			}
		}
	}

	e.waitUntil(deleteOldCaches());
});

// Listen to fetch events
// TODO: Rewampt this
self.addEventListener('fetch', (e) => {
	if (e.request.method != 'GET') return;

	async function respond() {
		const url = new URL(e.request.url);
		const cache = await caches.open(CACHE);

		// Serve build files from the cache
		if (ASSETS.includes(url.pathname)) {
			const cahcedResponse = await cache.match(url.pathname);
			if (cahcedResponse) return cahcedResponse;
		}

		// Try the network first
		try {
			const response = await fetch(e.request);

			const isNotExtension = url.protocol === 'http:';
			const isSucess = response.status === 200;

			if (isNotExtension && isSucess) {
				cache.put(e.request, response.clone());
			}

			return response;
		} catch {
			// fallback to cache
			const cahcedResponse = await cache.match(url.pathname);
			if (cahcedResponse) return cahcedResponse;
		}

		return new Response('Not found', { status: 404 });
	}

	e.respondWith(respond());
});

self.addEventListener('message', (e) => {
	if (e.data && e.data.type === 'SKIP_WAITING') {
		self.skipWaiting();
	}
});
