import { test, expect } from '@playwright/test';

test('SWR cache persiste en localStorage y evita fetch tras recarga', async ({ page }) => {
  // Variable para saber si hubo fetch
  let fetchCalled = false;

  // Intercepta las llamadas fetch *antes* de cargar la página
  await page.route('https://api.github.com/repos/**', route => {
    fetchCalled = true;
    route.continue();
  });

  // 1. Abre la página (se ejecuta fetch y queda cacheada)
  const url = 'http://localhost:5173/react-portfolio/';
  await page.goto(url);

  // 2. Espera que aparezcan datos (los datos llegan por fetch)
  await expect(page.locator('text=SurvivalGame')).toBeVisible();

  // 3. Reinicia flag porque acabamos de hacer un fetch real
  fetchCalled = false;

  // 4. Recarga la página para que use cache y no haga fetch
  await page.reload();

  // 5. Espera que los datos sigan visibles
  await expect(page.locator('text=SurvivalGame')).toBeVisible();

  // 6. Ahora sí comprobamos que NO se hizo fetch al recargar (porque la caché debe responder)
  expect(fetchCalled).toBe(false);

  // 7. Verificamos que el cache se guardó en localStorage
  const swrCache = await page.evaluate(() => localStorage.getItem('swr-cache'));
  expect(swrCache).not.toBeNull();
  const parsedCache = JSON.parse(swrCache!);
  expect(Array.isArray(parsedCache)).toBe(true);
  expect(parsedCache.length).toBeGreaterThan(0);
});