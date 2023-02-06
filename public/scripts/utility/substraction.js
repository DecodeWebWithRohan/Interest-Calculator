import { isValidNumber } from "./number-validity.js";

export function substract(minuend, ...substrahends) {
	let difference = Number(isValidNumber(minuend) ? minuend : 0);

	for (const substrahend of substrahends) {
		difference -= Number(isValidNumber(substrahend) ? substrahend : 0);
	}
	return difference;
}
