import alphabet, { Symbols } from './alphabet';

function functionBuilder(word: string): string {
	let wordRegex = '';
	wordRegex += Symbols.space;

	for (let i = 0; i < word.length; i++) {
		const letter = word[i].toUpperCase() as string; // Get single letter

		for (const [key, value] of Object.entries(alphabet)) {
			if (key === letter) {
				wordRegex += value;
				wordRegex += Symbols.aster;
				wordRegex += Symbols.specialCharacters;
				wordRegex += Symbols.space;
			}
		}
	}

	return wordRegex;
}
