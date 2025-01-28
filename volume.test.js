import {Volume, TEASPOON, TABLESPOON, OZ} from "./volume";

describe('Test volumes are equal...', () => {
    test('two equal volumes of the same unit are equal', () => {
        expect(new Volume(1, TEASPOON).equals(new Volume(1, TEASPOON))).toBe(true);
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
})

describe('Add volumes...', () => {
    test('Add two teaspoons', () => {
        expect(new Volume(1, TEASPOON).add(new Volume(1, TEASPOON)).equals(new Volume(2, TEASPOON))).toBe(true);
    })

})