import { deleteMessage, writeMessage } from '../../src/actions/messages';
import { ChatUserstate } from 'tmi.js';

/**
 * Handlers for a certain action
 */
function onMessageHandler(channel: string, context: ChatUserstate, msg: any, self: any) {
	if (self) {
		return;
	}
	const commandName = msg;
	/* eslint-disable */
	const regex =
		/\s*[t|T|Ť|ť|Ṫ|ṫ|Ţ|ţ|Ṭ|ṭ|Ț|ț|Ṱ|ṱ|Ṯ|ṯ|Ŧ|ŧ|Ⱦ|ⱦ|Ƭ|ƭ|Ʈ|ʈ|T̈|ẗ|ᵵ|ƫ|ȶ|ᶙ|ᴛ|Ｔ|ｔ]*[!@#$&)\\-`.+,\"]*\s*[e|E|É|é|È|è|Ê|ê|Ḙ|ḙ|Ě|ě|Ĕ|ĕ|Ẽ|ẽ|Ḛ|ḛ|Ẻ|ẻ|Ė|ė|Ë|ë|Ē|ē|Ȩ|ȩ|Ę|ę|ᶒ|Ɇ|ɇ|Ȅ|ȅ|Ế|ế|Ề|ề|Ễ|ễ|Ể|ể|Ḝ|ḝ|Ḗ|ḗ|Ḕ|ḕ|Ȇ|ȇ|Ẹ|ẹ|Ệ|ệ|ⱸ|ᴇ|Ｅ|ｅ|&|ᵫ|ε|3|Յ|ვ|Ȝ|ȝ|ɜ|з|З|ဒ|૩]*\s*[s|S|Ś|ś|Ṥ|ṥ|Ŝ|ŝ|Š|š|Ṧ|ṧ|Ṡ|ṡ|ẛ|Ş|ş|Ṣ|ṣ|Ṩ|ṩ|Ș|ș|S̩|s̩|ᵴ|ᶊ|ʂ|ȿ|ꜱ|Ｓ|ｓſ|ẞ|ß]*\s*[t|T|Ť|ť|Ṫ|ṫ|Ţ|ţ|Ṭ|ṭ|Ț|ț|Ṱ|ṱ|Ṯ|ṯ|Ŧ|ŧ|Ⱦ|ⱦ|Ƭ|ƭ|Ʈ|ʈ|T̈|ẗ|ᵵ|ƫ|ȶ|ᶙ|ᴛ|Ｔ|ｔ]/;

	const test = regex.test(commandName);

	if (test) {
		deleteMessage(channel, context.id!);
		writeMessage(
			channel,
			`@${context.username} your message has been deleted, this is a warning`
		);
	}
}

export default onMessageHandler;
