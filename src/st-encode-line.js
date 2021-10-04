import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default (str) => {
	let temp = str.split('');
	let counter = 1;
	let output = [];
	for (let i = 0; i < temp.length; i++) {
		if (temp[i] === temp[i + 1]) {
			counter++;
		} else {
			counter > 1 ? output.push(counter, temp[i]) : output.push(temp[i])
			counter = 1;
		}
	}
	return output.join('');
}
