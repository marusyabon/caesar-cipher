const transform = require('./transform');
const stream = require('stream')
const through2 = require('through2');

module.exports = function processInput(shift, input, output) {
	if (input) {
		console.log(args.input);
	}
	else {
		process.stdin.on('readable', () => {
			const userInput = process.stdin.setEncoding('utf-8').read();
			const transformedInput = transform(userInput.toString(), shift);
			if (!output) {
				console.log(transformedInput);
			}
			process.stdin.read()
		});
	}
};
