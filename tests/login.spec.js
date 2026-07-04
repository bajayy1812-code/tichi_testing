const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const testData = require('../fixtures/testData.json');

const logger = require('../utils/logger');
const { monitorConsole } = require('../utils/consoleMonitor');
const { monitorNetwork } = require('../utils/networkMonitor');
const { measurePerformance } = require('../utils/performance');
const { handleError } = require('../utils/errorHandler');

test.describe('Login Automation', () => {

    test.beforeEach(async ({ page }) => {

        logger.info("Launching Browser");

        monitorConsole(page);

        monitorNetwork(page);

        const login = new LoginPage(page);

        await login.navigate();

        await measurePerformance(page);

    });

    test('Valid Login', async ({ page }) => {

        const login = new LoginPage(page);

        try {

            logger.info("Executing Valid Login");

            await login.login(testData.validEmail);

            await expect(page).not.toHaveURL(/login/);

            logger.info("Valid Login Passed");

        }

        catch (error) {

            await handleError(page, "Valid_Login", error);

            throw error;

        }

    });

    test('Invalid Email', async ({ page }) => {

        const login = new LoginPage(page);

        try {

            logger.info("Executing Invalid Email");

            await login.login(testData.invalidEmail);

            await expect(login.emailInput).toBeVisible();

            logger.info("Invalid Email Validation Passed");

        }

        catch (error) {

            await handleError(page, "Invalid_Email", error);

            throw error;

        }

    });

});