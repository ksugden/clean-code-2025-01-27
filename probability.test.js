import {Probability} from "./probability";

describe('Test Probability...', () => {
    test('Two equal probabilities are equal', () => {
        expect(new Probability(1,2).equals(new Probability(1,2))).toBe(true);
    })
    test('Two inequal probabilities are inequal', () => {
        expect(new Probability(1,2).equals(new Probability(1,3))).toBe(false);
    })
})