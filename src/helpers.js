const fs = require('fs');
const path = require('path');

function encryptLetter(oldVal, newVal) {
	if (oldVal === oldVal.toUpperCase()) {
		return newVal.toUpperCase()
	}
	return newVal;
};

function defineEncryptedLetter(i, shift, arr) {
	const index = i + shift;
	let newIndex;
	if (index < 0) {
		newIndex = arr.length + index;
	}
	else {
		newIndex = index >= arr.length ? (index % arr.length) : index;
	}
	return arr[newIndex];
};

function checkPath(input) {
	const userPath = path.resolve(input);
	if (!fs.existsSync(userPath)) {
		process.stderr.write(`Such file or directory does't exists: ${userPath}`);
		process.exit(1);
	}
}

module.exports = { encryptLetter, defineEncryptedLetter, checkPath }