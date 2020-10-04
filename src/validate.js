const { ENCODE, DECODE } = require('./constants');

module.exports = function validate(args) {
	if (![ENCODE, DECODE].includes(args.action)) {
		process.stderr.write(`action can be only ${ENCODE} or ${DECODE}`);
		process.exit(1);
	};
	if (isNaN(parseInt(args.shift))) {
		process.stderr.write('shift must be a number');
		process.exit(1);
	};
}