export function isValidNumber(numberToCheck) {
	const isDefined = numberToCheck !== null
		&& numberToCheck !== undefined;
	const convertToNumber = Number(numberToCheck);
	return isDefined && !Number.isNaN(convertToNumber);
}
