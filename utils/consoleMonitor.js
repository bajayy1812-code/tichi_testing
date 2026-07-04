const logger = require('./logger');

function monitorConsole(page) {

    page.on('console', msg => {

        if (msg.type() === 'error') {

            logger.error(`Console Error: ${msg.text()}`);

        }

    });

}

module.exports = {
    monitorConsole
};