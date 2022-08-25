/**
 * Entry Point of the application
 */
import logger from '../utils/logger/logger';
import { info } from 'console';
import initApp from '../config/app_server';

function initAppService(app: any) {
	try {
		logger({
			level: info,
			message: '------- Welcome to the future - INIT APPLICATION 🔃 ----------',
		});
		initApp(app);
	} catch (error) {
		logger({
			level: error,
			message: error,
		});
	}
}

export default initAppService;
