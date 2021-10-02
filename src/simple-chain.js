import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
	chain: [],
	getLength() {
		return this.chain.length;
	},
	addLink(value) {
		value !== undefined
			? value === null
				? this.chain.push('null')
				: this.chain.push(value)
			: this.chain.push('');
		return this;
	},
	removeLink(pos) {
		if (!Number.isInteger(pos) || pos < 1 || pos > this.chain.length) {
			this.chain = [];
			throw Error("You can't remove incorrect link!");
		}
		this.chain.splice(pos - 1, 1);
		return this;
	},
	reverseChain() {
		this.chain.reverse();
		return this;
	},
	finishChain() {
		let finish = this.chain;
		this.chain = [];
		return `( ${finish.join(' )~~( ')} )`
	}
};
