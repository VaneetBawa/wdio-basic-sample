const fs = require('fs');
const path = require('path');

exports.config = {

    services: [
        [
            "lambdatest",
            {
              tunnel: false
            }
        ]
    ],
    
    hostname: 'hub.lambdatest.com',
    port: 80,
    path: '/wd/hub',
    ltErrorRemark: true,
    user: process.env.LT_USERNAME,
    key: process.env.LT_ACCESS_KEY,
    specs: [
        './test/specs/**/test2.e2e.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,
    capabilities: [
        {
            'LT:Options': {
                browserName: "Chrome",
                browserVersion: "130",
                network: false,
                console: "true",
                terminal: "true",
                platformName: "Linux",
                project: "LambdaPOC",
                build: "Testing headers through BIDI - 1",
                w3c: true,
                plugin: "node_js-webdriverio",
            },
           // webSocketUrl: true,
            'wdio:options': {
                automationProtocol: "WebDriver Bidi"
        },
            
        },
    ],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 5,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    after: async function (result) { 
        const status = result.passed ? 'failed' : 'failed'; 
    }
}