self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("fetch", () => {
  // iframe 사이트는 캐싱하지 않음 (안정성)
});
