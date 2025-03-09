const { expect, browser, $ } = require('@wdio/globals')

describe('My Login application1', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`)

        await $('#username').setValue('tomsmith')
        await $('#passwor').setValue('SuperSecretPassword!')
        await $('button[type="submit"]').click()
        browser.pause(20000);
        
        await expect($('#flash')).toBeExisting()
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!')
    })
})

