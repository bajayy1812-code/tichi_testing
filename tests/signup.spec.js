const { test, expect } = require('@playwright/test');

const SignupPage = require('../pages/SignupPage');
const testData = require('../fixtures/testData.json');

const logger = require('../utils/logger');
const { monitorConsole } = require('../utils/consoleMonitor');
const { monitorNetwork } = require('../utils/networkMonitor');
const { measurePerformance } = require('../utils/performance');
const { handleError } = require('../utils/errorHandler');

test.describe('Signup Automation', () => {

    test.beforeEach(async ({ page }) => {

        logger.info("Launching Signup");

        monitorConsole(page);

        monitorNetwork(page);

        const signup = new SignupPage(page);

        await signup.navigate();

        await measurePerformance(page);

    });

    test('Valid Signup', async ({ page }) => {

        const signup = new SignupPage(page);

        try {

            logger.info("Executing Signup");

            await signup.signUp(

                testData.firstName,
                testData.lastName,
                testData.mobile,
                testData.validEmail,
                testData.password,
                testData.confirmPassword

            );

            await expect(page).not.toHaveURL(/signup/);

            logger.info("Signup Passed");

        }

        catch (error) {

            await handleError(page, "Valid_Signup", error);

            throw error;

        }

    });

});