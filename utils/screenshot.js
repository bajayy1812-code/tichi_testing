const fs = require('fs-extra');

async function captureScreenshot(page, fileName) {

    await fs.ensureDir('./screenshots');

    await page.screenshot({
        path: `screenshots/${fileName}.png`,
        fullPage: true
    });

}

module.exports = {
    captureScreenshot
};