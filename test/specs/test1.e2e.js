const { expect, browser, $ } = require('@wdio/globals')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
    await browser.url('https://the-internet.herokuapp.com/login', {
            headers: {
                'Fluffy': 'Bunny'
            }
        });
    })
})