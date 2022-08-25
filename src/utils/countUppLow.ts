import _size from 'lodash/size';

const countUpperLowerCase = (input: string): number => {
	const numUpper = _size(input) - _size(input.replace(/[A-Z]/g, ''));

	return numUpper;
};

export default countUpperLowerCase;
