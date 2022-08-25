/* eslint-disable */
import path, { resolve } from 'path';
import moment from 'moment';
import { existsSync, mkdirSync, appendFileSync, createReadStream, WriteFileOptions } from 'fs';
import readLine from 'readline';
import config, { ILevels } from './config';

export interface ILog {
	level: any;
	message: any;
	error?: any;
}

/**
 * OBJECT {level, message, error}
 * @param options
 */
export const logger = (options: ILog) => {
	const levelName = getLevelName(options.level);
	const message = options.message ?? 'Undefined Error';
	const error = options.error ?? null;

	// Always log on the console
	writeToConsole(levelName, message, error);

	if (config.levels[levelName].writetoFile) {
		writeToFile(levelName, message);
	}
};

/**
 * Write formatted message to the console
 * @param {string} levelName
 * @param {string} message
 * @param {Error | null} error
 */
const writeToConsole = (levelName: string, message: string, error: Error | null = null) => {
	const level = config.levels[levelName];

	if (level.color.includes('#' as never)) {
		if (typeof level.color === 'string') {
			// chalkFunction = chalk.hex(level.color);
		}
	} else if (Array.isArray(level.color)) {
		if (level.color.length === 3) {
			// chalkFunction = chalk.rgb(level.color[0], level.color[1], level.color[2]);
		} else {
			throw new Error('Missing colors');
		}
	} else {
		// chalkFunction = chalk[level.color];
	}

	// message = error ? `${chalkFunction(`${error.message} \n ${error.stack}`)}` : message;
	message = error ? `${error.message} \n ${error.stack}` : message;
	const header = `[${levelName.toUpperCase()}]: [${getFormattedCurrentDate()}]`;

	// const newHeader = `${chalkFunction(header)}: ${chalkFunction(message)}`;
	const newHeader = `${header}: ${message}`;
	console.log(newHeader);
};

const getLevelName = (inputLevel: any): string => {
	return inputLevel in config.levels ? inputLevel : 'info';
};

const getFormattedCurrentDate = (): string => {
	return moment(new Date()).format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS);
};

/**
 * Write the formatted message to a file
 * @param levelName
 * @param message
 */
const writeToFile = (level: string, message: string) => {
	const logsDir = '../../logs';
	const data = `{"level": "${level.toUpperCase()}", "message": "${message}", "timestamp": "${getFormattedCurrentDate}"}\r\n`;

	// Create folder in case does not exist
	if (!existsSync(logsDir)) {
		mkdirSync(logsDir);
	}

	const options = {
		encoding: 'utf8',
		mode: 438, // translate to 0666 permission
	} as WriteFileOptions;

	appendFileSync(`../../logs/${level}.log`, data, options);
};

const readLog = async (fileName: any) => {
	if (!fileName) return;
	const logDir = '../../logs';

	return new Promise((resolve: any, reject: any) => {
		const file = path.join(logDir, fileName.includes('.') ? fileName : `${fileName}`);

		const lineReader = readLine.createInterface({
			input: createReadStream(file),
		});

		const logs: any[] = [];

		lineReader.on('line', (line: any) => {
			logs.push(JSON.parse(line));
		});

		lineReader.on('close', () => {
			// const message = chalk.yellow(`${fileName.toUpperCase()} Logs have been accessed`);
			const message = `${fileName.toUpperCase()} Logs have been accessed`;
			console.log(message);
			console.table(logs);
			resolve(logs);
		});

		lineReader.on('error', (error: Error) => {
			reject(error);
		});
	});
};

export const access = (message: string) => {
	logger({ level: 'access', message });
};

export const warn = (message: string) => {
	logger({ level: 'warn', message });
};

export const debug = (message: string) => {
	logger({ level: 'debug', message });
};

export default logger;
