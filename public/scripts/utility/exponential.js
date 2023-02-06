import { isValidNumber } from "./number-validity.js";

export function power(base, ...exponents) {
	if (!isValidNumber(base)) {
		return 0;
	}

	let exponential = base;
	for (const exponent of exponents) {
		if (isValidNumber(exponent)) {
			exponential **= Number(exponent);
		}
	}
	return exponential;
}
