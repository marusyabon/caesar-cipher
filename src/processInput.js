const transform = require('./transform');
const stream = require('stream')
const through2 = require('through2');
const fs = require('fs');

module.exports = function processInput(shift, input, output) {
	const writableStream = output
		? fs.createWriteStream(output)
		: process.stdout;

	const readableStream = input
		? fs.createReadStream(input)
		: process.stdin;

	readableStream.setEncoding('utf-8');

	const transformer = through2.obj((chunk, enc, cb) => {
		const data = Buffer.from(transform(chunk.toString(), shift));
		return cb(null, data);
	});
	
	readableStream.on('error', function (err) {
		console.log(err.stack);
	});

	readableStream
		.pipe(transformer)
		.pipe(writableStream);
};
