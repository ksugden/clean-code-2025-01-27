import {Volume, TEASPOON, TABLESPOON, OZ} from "./volume";

describe('Test equating volumes...', () => {
    test('two equal volumes of the same unit are equal', () => {
        expect(new Volume(1, TEASPOON).equals(new Volume(1, TEASPOON))).toBe(true);
    })
    test('two inequal volumes of the same unit are not equal', () => {
        expect(new Volume(1, TEASPOON).equals(new Volume(2, TEASPOON))).toBe(false);
    })
    test('two inequal volumes of different unit are not equal', () => {
        expect(new Volume(1, TEASPOON).equals(new Volume(1, TABLESPOON))).toBe(false);
    })
    test('two equal volumes of different unit are equal', () => {
        expect(new Volume(1, TABLESPOON).equals(new Volume(3, TEASPOON))).toBe(true);
    })
    test('one oz and 6 teaspoons are equal', () => {
        expect(new Volume(1, OZ).equals(new Volume(6, TEASPOON))).toBe(true);
    })
    test('3 oz and 6 tablespoons are equal', () => {
        expect(new Volume(3, OZ).equals(new Volume(6, TABLESPOON))).toBe(true);
    })
    test('A teaspoon is the base unit', () => {
        expect(new Volume(1, TEASPOON).equals(new Volume(1))).toBe(true);
    })
    test('A fraction tablespoon equals a teaspoon', () => {
        expect(new Volume(1/3, TABLESPOON).equals(new Volume(1, TEASPOON))).toBe(true);
    })
})

describe('Test adding volumes...', () => {
    test('Add two teaspoons', () => {
        expect(new Volume(1, TEASPOON).add(new Volume(1, TEASPOON)).equals(new Volume(2, TEASPOON))).toBe(true);
    })
    test('Add a teaspoon and a tablespoon', () => {
        expect(new Volume(1, TEASPOON).add(new Volume(1, TABLESPOON)).equals(new Volume(4, TEASPOON))).toBe(true);
    })
    test('Add two base units', () => {
        expect(new Volume(1).add(new Volume(1)).equals(new Volume(2))).toBe(true);
    })
})