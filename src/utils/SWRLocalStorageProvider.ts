const EXPIRATION_TIME = 1000 * 60 * 60; // 1 hora

export const localStorageProvider = (): Map<string, any> => {
  const rawCache = JSON.parse(localStorage.getItem("swr-cache") || "[]") as [string, { value: any; timestamp: number }][];
  const cache = new Map<string, any>();

  rawCache.forEach(([key, entry]) => {
    if (!entry || typeof entry.timestamp !== "number") return;

    const { value, timestamp } = entry;
    const isExpired = Date.now() - timestamp > EXPIRATION_TIME;

    if (!isExpired) {
      cache.set(key, value);
    }
  });

  // Guardar caché antes de cerrar o recargar
  window.addEventListener("beforeunload", () => {
    const data: [string, { value: any; timestamp: number }][] = [];

    for (const [key, value] of cache.entries()) {
      data.push([key, { value, timestamp: Date.now() }]);
    }

    localStorage.setItem("swr-cache", JSON.stringify(data));
  });

  return cache;
};