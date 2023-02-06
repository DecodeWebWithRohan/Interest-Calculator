import { add, divide, multiply } from '../utility/index.js';

export function calculateSimpleInterest({
    principalAmount,
    rateOfInterest,
    time,
}) {
    const interestAccumulated = divide(
        multiply(
            principalAmount,
            rateOfInterest,
            time,
        ),
        100,
    );
    const totalAmount = add(
        principalAmount,
        interestAccumulated,
    );

    return {
        interestAccumulated,
        totalAmount,
    };
}
