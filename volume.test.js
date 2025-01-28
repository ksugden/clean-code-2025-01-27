import {Volume, TEASPOON} from "./volume";

describe('Test volume...', () => {
    test('two equal volumes of the same unit are equal', () => {
        expect(new Volume(1, TEASPOON).equals(new Volume(1, TEASPOON))).toBe(true);
    })
})