import { isValidNumber } from "./number-validity.js";

export function multiply(...numbers) {
	let multiplication = 1;
	for (const element of numbers) {
		if (isValidNumber(element)) {
			multiplication *= Number(element);
		}
	}
	return multiplication;
}
