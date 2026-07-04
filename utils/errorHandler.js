const logger = require('./logger');
const { captureScreenshot } = require('./screenshot');

async function handleError(page, testName, error) {

    logger.error(`${testName} FAILED`);
    logger.error(error.message);

    if (!page.isClosed()) {
        await captureScreenshot(page, `${testName}_failure`);
    }

}

module.exports = {
    handleError
};