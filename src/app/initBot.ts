/**
 * Entry Point of the application
 */
import initListeners from '../events';
import initServer from '../config/bot_server';
import logger from '../utils/logger/logger';
import { info } from 'console';
import initFeatures from '../../src/feature';

function initBot(client?: any) {
	try {
		logger({
			level: info,
			message: '------- BOT-MOD ON 🤖 ----------',
		});
		initServer();
		initListeners();
		initFeatures();
	} catch (error) {
		logger({
			level: error,
			message: error,
		});
	}
}

export default initBot;
