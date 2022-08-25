import logger from '../../src/utils/logger/logger';
import { client } from '../config/bot_server';

export async function connectToChannel(): Promise<void> {
	try {
		await client.connect();
	} catch (error) {
		logger({
			level: 'error',
			message: `❌ Error on execution - connectToChannel. Details: ${error}`,
		});
	}
}

export async function disconnectToChannel(): Promise<void> {
	try {
		await client.disconnect();
	} catch (error) {
		logger({
			level: 'error',
			message: `❌ Error on execution - disconnectToChannel. Details: ${error}`,
		});
	}
}

export async function sendPing(): Promise<void> {
	try {
		await client.ping();
	} catch (error) {
		logger({
			level: 'error',
			message: `❌ Error on execution - sendPing. Details: ${error}`,
		});
	}
}
