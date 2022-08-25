/**
 *  Twitch server that connects
 */
import logger from '../utils/logger/logger';
import { info } from 'console';
import express from 'express';
import { appListenerPort } from '../events/connection';

async function initApp(app: typeof express) {
	try {
		appListenerPort(app);
	} catch (error) {
		logger({
			level: error,
			message: error,
		});
	} finally {
		logger({
			level: info,
			message: 'initApp terminated',
		});
	}
}

export default initApp;
