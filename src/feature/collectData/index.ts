import logger from 'src/utils/logger/logger';
import writeXlsxFile from 'write-excel-file/node';

export type ICollectDataName = '';

interface ICollectData {
	name: ICollectDataName;
}

async function collectData({ name: string }: ICollectData) {
	try {
		const objects = [
			{
				name: 'John Smith',
				dateOfBirth: new Date(),
				cost: 1800,
				paid: true,
			},
			{
				name: 'Alice Brown',
				dateOfBirth: new Date(),
				cost: 2600,
				paid: false,
			},
		];

		const schema = [
			{
				column: 'Name',
				type: String,
				value: (student: any) => student.name,
			},
			{
				column: 'Date of Birth',
				type: Date,
				format: 'mm/dd/yyyy',
				value: (student: any) => student.dateOfBirth,
			},
			{
				column: 'Cost',
				type: Number,
				format: '#,##0.00',
				value: (student: any) => student.cost,
			},
			{
				column: 'Paid',
				type: Boolean,
				value: (student: any) => student.paid,
			},
		];

		await writeXlsxFile(objects, {
			schema,
			filePath: `${name}.xlsx`,
		});
	} catch (error) {
		logger({ level: error, message: `${error}` });
	}
}

export default collectData;
