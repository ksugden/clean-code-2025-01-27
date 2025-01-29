import {Measurement, TEASPOON, TABLESPOON, OZ} from "./measurement";

describe('Test equating Measurements...', () => {
    test('two equal Measurements of the same unit are equal', () => {
        expect(new Measurement(1, TEASPOON).equals(new Measurement(1, TEASPOON))).toBe(true);
    })
    test('two inequal Measurements of the same unit are not equal', () => {
        expect(new Measurement(1, TEASPOON).equals(new Measurement(2, TEASPOON))).toBe(false);
    })
    test('two inequal Measurements of different unit are not equal', () => {
        expect(new Measurement(1, TEASPOON).equals(new Measurement(1, TABLESPOON))).toBe(false);
    })
    test('two equal Measurements of different unit are equal', () => {
        expect(new Measurement(1, TABLESPOON).equals(new Measurement(3, TEASPOON))).toBe(true);
    })
    test('one oz and 6 teaspoons are equal', () => {
        expect(new Measurement(1, OZ).equals(new Measurement(6, TEASPOON))).toBe(true);
    })
    test('3 oz and 6 tablespoons are equal', () => {
        expect(new Measurement(3, OZ).equals(new Measurement(6, TABLESPOON))).toBe(true);
    })
    test('A teaspoon is the base unit', () => {
        expect(new Measurement(1, TEASPOON).equals(new Measurement(1))).toBe(true);
    })
    test('A fraction tablespoon equals a teaspoon', () => {
        expect(new Measurement(1/3, TABLESPOON).equals(new Measurement(1, TEASPOON))).toBe(true);
    })
})

describe('Test adding Measurements...', () => {
    test('Add two teaspoons', () => {
        expect(new Measurement(1, TEASPOON).add(new Measurement(1, TEASPOON)).equals(new Measurement(2, TEASPOON))).toBe(true);
    })
    test('Add a teaspoon and a tablespoon', () => {
        expect(new Measurement(1, TEASPOON).add(new Measurement(1, TABLESPOON)).equals(new Measurement(4, TEASPOON))).toBe(true);
    })
    test('Add two base units', () => {
        expect(new Measurement(1).add(new Measurement(1)).equals(new Measurement(2))).toBe(true);
    })
})