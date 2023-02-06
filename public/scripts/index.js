import { TYPES_OF_INTEREST } from "./service/index.js";

function main() {
	const typeOfInterestSelect = document.getElementById('type-of-interest-select');
	const typeOfInterestOptions = typeOfInterestSelect.querySelectorAll('option');

	const principalAmountInput = document.getElementById('principal-amount-input');
	const rateOfInterestInput = document.getElementById('rate-of-interest-input');
	const timeInput = document.getElementById('time-input');
	const numberOfTimesInput = document.getElementById('number-of-times-input');

	const numberOfTimesContainer = document.getElementById('number-of-times-container');

	const totalAmountOutput = document.getElementById('total-amount-output');
	const interestAccumulatedOutput = document.getElementById('interest-accumulated-output');

	const calculateButton = document.getElementById('calculate-button');
	const resetButton = document.getElementById('reset-button');

	function setOutputData({
		totalAmount,
		interestAccumulated,
	}) {
		totalAmountOutput.value = totalAmount?.toFixed(2);
		interestAccumulatedOutput.value = interestAccumulated?.toFixed(2);
	}

	function calculateClickEvent() {
		const typeOfInterest = typeOfInterestSelect?.value;
		const principalAmount = Number(principalAmountInput?.value);
		const rateOfInterest = Number(rateOfInterestInput?.value);
		const time = Number(timeInput?.value);
		const numberOfTimes = Number(numberOfTimesInput?.value);

		// TODO
		// setOutputData(calculateInterest({
		// 	typeOfInterest,
		// 	principalAmount,
		// 	rateOfInterest,
		// 	time,
		// 	numberOfTimes,
		// }));
	}

	function resetClickEvent() {
		typeOfInterestSelect.value = TYPES_OF_INTEREST.CompoundInterest;

		principalAmountInput.value = '';
		rateOfInterestInput.value = '';
		timeInput.value = '';
		numberOfTimesInput.value = '';

		totalAmountOutput.value = '';
		interestAccumulatedOutput.value = '';
	}

	function typeOfInterestChangeEvent() {
		const typeOfInterest = typeOfInterestSelect.value;
		switch (typeOfInterest) {
			case TYPES_OF_INTEREST.CompoundInterest:
				numberOfTimesContainer.style.display = 'flex';
				break;
			
			case TYPES_OF_INTEREST.SimpleInterest:
			default:
				numberOfTimesContainer.style.display = 'none';
				break;
		}
	}

	const typeOfInterests = Object.values(TYPES_OF_INTEREST);
	typeOfInterestOptions?.forEach((typeOfInterestOption, index) => {
		typeOfInterestOption.value = typeOfInterests[index];
	});
	typeOfInterestSelect?.addEventListener('change', typeOfInterestChangeEvent);

	calculateButton?.addEventListener('click', calculateClickEvent);
	resetButton?.addEventListener('click', resetClickEvent);
}

main();
