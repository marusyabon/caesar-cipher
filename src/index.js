const { program } = require('commander');
const validate = require('./validate');
const processInput = require('./processInput');

program
	.storeOptionsAsProperties(false)
	.passCommandToAction(false)
	.requiredOption('-s, --shift <number>', 'a shift')
	.option('-i, --input <string>', 'an input file')
	.option('-o, --output <string>', 'an output file')
	.requiredOption('-a, --action <string>', 'an action encode/decode');

program.parse(process.argv);
const args = program.opts();
validate(args);
processInput(args.shift, args.input, args.output);
