import {PlaywrightTestConfig} from "@playwright/test";

const config: PlaywrightTestConfig = {
    use: {
        browserName: "chromium",
        trace: "off",
        screenshot: "on",
        video: {
            mode: "retain-on-failure",
        },

        contextOptions: {
            ignoreHTTPSErrors: true
        },

        launchOptions: {
            channel: "chrome",
            headless: true,
            slowMo: 500,
        }
    }
}