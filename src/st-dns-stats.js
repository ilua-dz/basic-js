import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
	let output = {};
	let temp = domains.map(item => item = item.split('.').map(s => s = '.' + s).reverse())
	for (let i = 0; i < temp.length; i++) {
		for (let j = 1; j < temp[i].length; j++) {
			temp[i][j] = temp[i][j - 1] + temp[i][j]
		}
	}
	temp.flat().forEach(i => { output[i] = (output[i] || 0) + 1; });
	return output;
}