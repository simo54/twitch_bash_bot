// This to apply in general chat reading
// if message contains command starting with ! {
//     trim message and fire function
// }

const commandsChatToLink = (command: string, textToReturn: string): string => {
	const commandName = command.trim();

	switch (commandName) {
		case '':
			return '';
		default:
			return '';
	}
};
