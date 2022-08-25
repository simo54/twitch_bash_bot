export interface ILevelProperty {
	color: string | number[];
	writetoFile: boolean;
}

export interface IIndexLevel {
	[index: string]: ILevelProperty;
}

export interface ILevels {
	// [access]: ILevelProperty;
	// [warn: string]: ILevelProperty;
	// [debug: string]: ILevelProperty;
	// [system: string]: ILevelProperty;
	// [database: string]: ILevelProperty;
	// [event: string]: ILevelProperty;
	// [info: string]: ILevelProperty;
	// [error: string]: ILevelProperty;
	// [fatal: string]: ILevelProperty;
	access: ILevelProperty;
	warn: ILevelProperty;
	debug: ILevelProperty;
	system: ILevelProperty;
	database: ILevelProperty;
	event: ILevelProperty;
	info: ILevelProperty;
	error: ILevelProperty;
	fatal: ILevelProperty;
}

export interface IConfig {
	levels: IIndexLevel;
}

const config = {
	levels: {
		access: {
			color: [200, 148, 255],
			writetoFile: true,
		},
		warn: {
			color: '#ffff00',
			writetoFile: true,
		},
		debug: {
			color: 'cyan',
			writetoFile: true,
		},
		system: {
			color: 'blue',
			writetoFile: true,
		},
		database: {
			color: 'cyanBright',
			writetoFile: true,
		},
		event: { color: 'magenta', writetoFile: true },
		info: { color: 'green', writetoFile: true },
		error: { color: 'red', writetoFile: true },
		fatal: { color: 'redBright', writetoFile: true },
	},
} as IConfig;

export default config;
