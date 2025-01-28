import {Volume, TEASPOON, TABLESPOON, OZ} from "./volume";

describe('Test volume...', () => {
    test('two equal volumes of the same unit are equal', () => {
        expect(new Volume(1, TEASPOON).equals(new Volume(1, TEASPOON))).toBe(true);
    })
    test('two equal volumes of different unit are equal', () => {
        expect(new Volume(1, TABLESPOON).equals(new Volume(3, TEASPOON))).toBe(true);
    })
    test('two equal volumes of different unit are equal', () => {
        expect(new Volume(1, OZ).equals(new Volume(6, TEASPOON))).toBe(true);
    })
})

// Volume(2, Volume(3, TEASPOONS)) = 3 TEASPOONS x 2 = (v1.quantity * v2.quantity , v2.unit)

// Volume(2, Volume(4, Volume(5, Volume(1)))) = 2 * 4 * 5 * TEASPOONS

