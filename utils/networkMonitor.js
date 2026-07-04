const logger = require('./logger');

function monitorNetwork(page) {

    page.on('response', response => {

        if (response.status() >= 400) {

            logger.error(
                `HTTP ${response.status()} : ${response.url()}`
            );

        }

    });

}

module.exports = {
    monitorNetwork
};