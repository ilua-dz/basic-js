import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
	constructor(dir = true) {
		this.dir = dir;
		this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	}

	crypt(str, key, method) {
		if (!str || !key) throw Error('Incorrect arguments!');
		str = str.toUpperCase().split('');
		while (key.length < str.length) key += key;
		key = key.toUpperCase().split('');
		let shift;
		let l = this.alphabet.length;
		for (let i = 0, j = 0; i < str.length; i++) {
			if (this.alphabet.includes(str[i])) {
				shift = (method === 'encrypt')
					? (this.alphabet.indexOf(str[i]) + this.alphabet.indexOf(key[j])) % l
					: (method === 'decrypt')
						? (this.alphabet.indexOf(str[i]) - this.alphabet.indexOf(key[j]) + l) % l
						: 0
				j++;
				str[i] = this.alphabet[shift];
			}
		}
		if (this.dir) return str.join('')
		else return str.reverse().join('')
	}

	encrypt = (str, key) => this.crypt(str, key, 'encrypt');
	decrypt = (str, key) => this.crypt(str, key, 'decrypt');
}