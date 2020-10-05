const { ALPHABET, ENCODE } = require('./constants');
const { encryptLetter, defineEncryptedLetter } = require('./helpers');

module.exports = function transform(input, shift, action) {
	const alphabet = ALPHABET.split('');
	const inputBySymbols = input.split('');

	const newArr = inputBySymbols.map(symb => {
		const i = alphabet.findIndex(el => el === symb.toLowerCase());
		if (i >= 0) {
			const _shift = action === ENCODE ? parseInt(shift, 10) : -parseInt(shift, 10);
			const letter = defineEncryptedLetter(i, _shift, alphabet);
			return encryptLetter(symb, letter);
		}
		return symb;
	});
	return newArr.join('');
};
