/**
 *  Twitch server that connects
 */
import { connectToChannel } from '../actions/connection';
import { connectionOptions } from '../types/costants';
import tmi from 'tmi.js';
import logger from '../utils/logger/logger';
import { info } from 'console';

export const client = new tmi.client(connectionOptions);

async function initServer() {
	try {
		await connectToChannel();
		await logger({
			level: info,
			message: '✅ initServer DONE',
		});
	} catch (error) {
		logger({
			level: error,
			message: error,
		});
	} finally {
		logger({
			level: info,
			message: 'initServer terminated',
		});
	}
}

export default initServer;
