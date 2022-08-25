import { CHANNEL, SECRET_TOKEN, BOTNAME } from '../config/secrets';

export interface IConfiguration {
	options?: {
		clientId?: string;
		debug?: boolean;
	};
	connection?: {
		server?: string;
		port?: number; // Default: 80,
		reconnect?: boolean; // Default: false
		maxReconnectAttempts?: number; // Default: Infinity
		maxReconnectInterval?: number; // Default: 30000
		reconnectDecay?: number; // Default: 1.5
		reconnectInterval?: number; //Default: 1000
		secure?: boolean; //Default: false
		timeout?: number; // Default: 9999
	};
	identity?: {
		username: string;
		password: string;
	};
	channels?: string[];
}

/**
 * Bot Configuration
 */
export const connectionOptions: IConfiguration = {
	options: { debug: true },
	connection: {
		reconnect: true,
		secure: true,
		timeout: 180000,
		reconnectDecay: 1.4,
		reconnectInterval: 1000,
	},
	identity: {
		username: BOTNAME || '',
		password: SECRET_TOKEN || '',
	},
	channels: [CHANNEL || ''],
};
