const { ALPHABET } = require('./constants');
const { encryptLetter, defineEncryptedLetter } = require('./helpers');

module.exports = function transform(input, shift) {
	const alphabet = ALPHABET.split('');
	const inputBySymbols = input.split('');

	const newArr = inputBySymbols.map(symb => {
		const i = alphabet.findIndex(el => el === symb.toLowerCase());
		if (i >= 0) {
			const newIndex = i + parseInt(shift, 10);
			const letter = defineEncryptedLetter(newIndex, alphabet);
			return encryptLetter(symb, letter);
		}
		return symb;
	});
	return newArr.join('');
};
