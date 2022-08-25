import logger from '../utils/logger/logger';
import { client } from '../config/bot_server';

/**
 * Send an action message on a channel. (/me <message>)
 * @param channel
 * @param message
 */
export async function sendActionMessage(channel: string, message: string): Promise<void> {
	try {
		await client.action(channel, message);
	} catch (error) {
		logger({
			level: 'error',
			message: error,
		});
	} finally {
		logger({
			level: 'info',
			message: 'sendActionMessage terminated',
		});
	}
}

export async function clearChat(channel: string): Promise<void> {
	try {
		await client.clear(channel);
	} catch (error) {
		logger({
			level: 'error',
			message: `❌ Error on execution - clearChat. Details: ${error}`,
		});
	}
}

/**
 * Write a message
 * @param channel
 * @param message
 */
export async function writeMessage(channel: string, message: string): Promise<void> {
	try {
		await client.say(channel, message);
	} catch (error) {
		logger({
			level: 'error',
			message: `❌ Error on execution - writeMessage. Details: ${error}`,
		});
	}
}

export async function deleteMessage(channel: string, contextId: string): Promise<void> {
	try {
		await client.deletemessage(channel, contextId);
	} catch (error) {
		logger({
			level: 'error',
			message: `❌ Error on execution - deleteMessage. Details: ${error}`,
		});
	}
}
