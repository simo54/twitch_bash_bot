import onMessageHandler from '../../handlers/messages';
import { client } from '../../config/bot_server';
import logger from '../../utils/logger/logger';

const chatListeners = async () => {
	try {
		await client.on('chat', onMessageHandler);
	} catch (error) {
		logger({
			level: error,
			message: error,
		});
	}
};

export default chatListeners;
