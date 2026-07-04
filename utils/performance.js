const logger = require('./logger');

async function measurePerformance(page) {

    const start = Date.now();

    await page.waitForLoadState('networkidle');

    const end = Date.now();

    logger.info(`Page Load Time : ${end - start} ms`);

}

module.exports = {
    measurePerformance
};