import { add, divide, multiply, power, substract } from "../utility/index.js";

export function calculateCompoundInterest({
    principalAmount,
    rateOfInterest,
    time,
    numberOfTimes,
}) {
    const totalAmount = multiply(
        principalAmount,
        power(
            add(
                1,
                divide(
                    rateOfInterest,
                    numberOfTimes,
                    100,
                ),
            ),
            multiply(
                time,
                numberOfTimes,
            ),
        ),
    );
    const interestAccumulated = substract(
        totalAmount,
        principalAmount,
    );

    return {
        interestAccumulated,
        totalAmount,
    };
}
