import logger from '../utils/logger/logger';
import { client } from '../config/bot_server';

export async function emoteOnlyON(channel: string, duration?: number): Promise<void> {
	try {
		await client.emoteonly(channel);
	} catch (error) {
		logger({
			level: 'error',
			message: error,
		});
	}
}

export async function emoteOnlyOFF(channel: string, duration?: number): Promise<void> {
	try {
		await client.emoteonlyoff(channel);
	} catch (error) {
		logger({
			level: 'error',
			message: error,
		});
	}
}

export async function slowMode(channel: string, duration?: number): Promise<any> {
	try {
		await client.slow(channel);
	} catch (error) {
		logger({
			level: 'error',
			message: error,
		});
	}
}

export async function slowModeOFF(channel: string, duration?: number): Promise<any> {
	try {
		await client.slowoff(channel);
	} catch (error) {
		logger({
			level: 'error',
			message: error,
		});
	}
}

export async function subscribersOnlyON(channel: string, duration?: number): Promise<any> {
	try {
		await client.subscribers(channel);
	} catch (error) {
		logger({
			level: 'error',
			message: error,
		});
	}
}

export async function subscribersOnlyOFF(channel: string, duration?: number): Promise<any> {
	try {
		await client.subscribersoff(channel);
	} catch (error) {
		logger({
			level: 'error',
			message: error,
		});
	}
}

export async function hostON(ownChannel: string, otherChannel: string): Promise<any> {
	try {
		await client.host(ownChannel, otherChannel);
	} catch (error) {
		logger({
			level: 'error',
			message: error,
		});
	}
}

export async function hostOFF(ownChannel: string): Promise<any> {
	try {
		await client.unhost(ownChannel);
	} catch (error) {
		logger({
			level: 'error',
			message: error,
		});
	}
}

/**
 * Run commercial on a channel for X seconds. Available lengths (seconds) are 30, 60, 90, 120, 150, 180.
 * @param ownChannel
 */
export async function runCommercial(ownChannel: string, seconds: number): Promise<any> {
	try {
		await client.commercial(ownChannel, seconds);
	} catch (error) {
		logger({
			level: 'error',
			message: error,
		});
	}
}

/**
 * Enable followers-only on a channel.
 * @param ownChannel
 * @param length
 */
export async function followersOnlyON(ownChannel: string, length: number): Promise<any> {
	try {
		await client.followersonly(ownChannel, length);
	} catch (error) {
		logger({
			level: 'error',
			message: error,
		});
	}
}

/**
 * Disable followers-only on a channel.
 * @param ownChannel
 * @param length
 */
export async function followersOnlyOFF(ownChannel: string): Promise<any> {
	try {
		await client.followersonlyoff(ownChannel);
	} catch (error) {
		logger({
			level: 'error',
			message: error,
		});
	}
}
