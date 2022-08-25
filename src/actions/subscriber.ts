import logger from '../../src/utils/logger/logger';
import { client } from '../config/bot_server';
import { BanReasons } from '../types/messages';

export async function banUser(channel: string, username: string, reason: BanReasons): Promise<any> {
	try {
		await client.ban(channel, username, reason);
	} catch (error) {
		logger({
			level: 'error',
			message: `❌ Error on execution - banUser. Details: ${error}`,
		});
	}
}

export async function unBanUser(channel: string, username: string): Promise<any> {
	try {
		await client.unban(channel, username);
	} catch (error) {
		logger({
			level: 'error',
			message: `❌ Error on execution - unBanUser. Details: ${error}`,
		});
	}
}
