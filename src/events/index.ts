import logger from '../utils/logger/logger';
import { client } from '../config/bot_server';
import chatListeners from './chat';
import { connectionListeners } from './connection';
import subListeners from './sub';

async function initListeners() {
	try {
		connectionListeners();
		chatListeners();
		subListeners();

		logger({
			level: 'info',
			message: 'Listeners active',
		});
	} catch (error) {
		logger({
			level: error,
			message: error,
		});
	}
}

export default initListeners;
