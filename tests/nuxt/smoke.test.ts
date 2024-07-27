import { $fetch, createPage, setup, url } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

await setup({
  server: true,
  browser: true,
})

describe('smoke testing browser loads', async () => {
  it('$fetch', async () => {
    const html = await $fetch('/')
    expect(html).toContain('WELCOME')
  })

  it('playwright', async () => {
    const page = await createPage()
    await page.goto(url('/'), { waitUntil: 'hydration' })
    expect(await page.locator('body').innerHTML()).toContain('WELCOME')
    await page.close()
  })
})
