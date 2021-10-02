import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default n => String(n).split('').map((item, index, arr) => Number(arr.slice(0, index).join('') + arr.slice(index + 1, arr.length).join(''))).sort((a, b) => b - a)[0];
