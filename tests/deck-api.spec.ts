import { test, expect } from '@playwright/test';

const BASE_URL = 'https://deckofcardsapi.com/api'

test('create shuffled deck', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/deck/new/shuffle/?deck_count=1`);
    expect(response.ok()).toBeTruthy();

    const json = await response.json();
    expect(json).toHaveProperty('shuffled', true);
    expect(json).toHaveProperty('remaining', 52);
})
