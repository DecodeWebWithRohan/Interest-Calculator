import { isValidNumber } from "./number-validity.js";

export function add(...numbers) {
	let sum = 0;
	for (const element of numbers) {
		sum += Number(isValidNumber(element) ? element : 0);
	}
	return sum;
}
