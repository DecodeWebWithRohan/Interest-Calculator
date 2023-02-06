import { isValidNumber } from "./number-validity.js";

export function divide(numerator, ...denominators) {
	if (!isValidNumber(numerator)) {
		return 0;
	}

	let division = Number(numerator);
	for (const denominator of denominators) {
		if (isValidNumber(denominator) && Number(denominator) !== 0) {
			division /= denominator;
		}
	}
	return division;
}
