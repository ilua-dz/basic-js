import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

export default sample => {
	if (typeof sample !== 'string' || !sample || sample > 15) return false;
	let res = Math.ceil((Math.log(MODERN_ACTIVITY / sample) * HALF_LIFE_PERIOD) / 0.693);
	return Number.isInteger(res) ? res : false;
}