import { calculateCompoundInterest } from "./calculate-compound-interest.js";
import { calculateSimpleInterest } from "./calculate-simple-interest.js";
import { TYPES_OF_INTEREST } from "./config.js";

export function calculateInterest({
    typeOfInterest,
    principalAmount,
    rateOfInterest,
    time,
    numberOfTimes,
}) {
    switch (typeOfInterest) {
        case TYPES_OF_INTEREST.CompoundInterest:
            return calculateCompoundInterest({
                principalAmount,
                rateOfInterest,
                time,
                numberOfTimes,
            });
        
        case TYPES_OF_INTEREST.SimpleInterest:
        default:
            return calculateSimpleInterest({
                principalAmount,
                rateOfInterest,
                time,
            });
    }
}
