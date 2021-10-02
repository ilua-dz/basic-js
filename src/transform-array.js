import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default arr => {
	if (!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!");
	let result = [...arr];
	for (let i = 0; i < arr.length; i++) {
		switch (result[i]) {
			case '--discard-next':
				if (i + 1 == result.length) {
					result.splice(i, 1);
					i -= 1;
				} else if (arr[i + 2] === '--discard-prev' || arr[i + 2] === '--double-prev') {
					result.splice(i, 3)
				}
				else result.splice(i, 2);
				break;
			case '--discard-prev':
				if (i == 0) result.splice(i, 1)
				else result.splice(i - 1, 2);
				i -= 1;
				break;
			case '--double-next':
				if (i + 1 == result.length) {
					result.splice(i, 1)
				} else result.splice(i, 1, result[i + 1])
				break;
			case '--double-prev':
				if (i == 0) {
					result.splice(i, 1)
					i -= 1;
				} else result.splice(i, 1, result[i - 1]);
				break;
		}
	}
	return result;
}
