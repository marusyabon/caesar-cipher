function encryptLetter(oldVal, newVal) {
	if (oldVal === oldVal.toUpperCase()) {
		return newVal.toUpperCase()
	}
	return newVal;
};

function defineEncryptedLetter(index, arr) {
	const newIndex = index >= arr.length ? (index % arr.length) : index;
	return arr[newIndex];
};

module.exports = { encryptLetter, defineEncryptedLetter }