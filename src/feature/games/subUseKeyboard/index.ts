import { spawn } from 'child_process';

export interface ISubUseKeyBoard {
	keypressed: string;
}

const subUseKeyBoard = ({ keypressed }: ISubUseKeyBoard) => {
	let dataToSend: string | number;

	const key = keypressed.trim().toLowerCase();

	const python = spawn('python', [`${process.cwd()}/src/functions/inputFromChat.py`, key]);

	python.stdout.on('data', (data) => {
		dataToSend = data.toString();
	});
	python.stderr.on('data', (data) => {
		console.error(`stderr: ${data}`);
	});
	python.on('exit', () => {
		console.log(`Done ✅ ${dataToSend}`);
	});
};

export default subUseKeyBoard;
