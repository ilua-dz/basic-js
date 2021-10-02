import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
	let optionsSeparator = options.separator ? options.separator : '+';
	let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
	let addRepTimes = Number.isInteger(options.additionRepeatTimes) ? options.additionRepeatTimes : 1;
	let repTimes = Number.isInteger(options.repeatTimes) ? options.repeatTimes : 1;
	let addition = options.addition === null ? 'null' : options.addition;

	let separator = [];
	let res = [];

	for (let i = 0; i < addRepTimes; i++) separator.push(addition)
	str += separator.join(additionSeparator);

	for (let i = 0; i < repTimes; i++) res.push(str);

	return res.join(optionsSeparator);
}
