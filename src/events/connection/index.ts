import { client } from '../../config/bot_server';
import logger from '../../utils/logger/logger';
import { PORTHOST } from '../../config/secrets';

export const connectionListeners = async () => {
	try {
		await client.on('connected', (addr: string | number, port: number) => {
			logger({ level: 'info', message: `* Connected to ${addr}:${port}` });
		});
		await client.on('action', (channel, userstate, message, self) => {
			// Don't listen to my own messages..
			if (self) return;
		});
	} catch (error) {
		logger({
			level: error,
			message: error,
		});
	}
};

export const appListenerPort = async (app: any) => {
	try {
		app.listen(PORTHOST, () =>
			logger({ level: 'info', message: `💻 listening on port ${PORTHOST}!` })
		);
	} catch (error) {
		logger({
			level: error,
			message: error,
		});
	}
};
