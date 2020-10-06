const through2 = require('through2');
const fs = require('fs');
const transform = require('./transform');

module.exports = function encrypt({shift, input, output, action}) {
	const writableStream = output
		? fs.createWriteStream(output, { flags: 'a+' })
		: process.stdout;

	const readableStream = input
		? fs.createReadStream(input)
		: process.stdin;

	readableStream.setEncoding('utf-8');

	const transformer = through2.obj((chunk, enc, cb) => {
		const data = Buffer.from(transform(chunk.toString(), shift, action));
		return cb(null, data);
	});
	
	readableStream.on('error', () => {
		console.error('Unexpected error');
	});
	
	writableStream.on('error', () => {
		console.error('Unexpected error');
	});

	readableStream
		.pipe(transformer)
		.pipe(writableStream);
};
