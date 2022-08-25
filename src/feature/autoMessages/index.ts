import logger from '../../utils/logger/logger';
import { CHANNEL } from '../../config/secrets';
import { sendActionMessage } from '../../../src/actions/messages';

async function autoMessages(customMsg = 'automessage') {
	return await new Promise((resolve) => {
		const interval = setInterval(() => {
			try {
				if (!CHANNEL || !customMsg) throw Error;
				sendActionMessage(CHANNEL, customMsg);
			} catch (error) {
				logger({ level: 'error', message: error });
			}
			const test = false;
			if (test) {
				resolve('foo');
				clearInterval(interval);
			}
		}, 300000);
	});
}
export default autoMessages;
