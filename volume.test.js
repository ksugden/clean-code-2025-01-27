import {Volume} from "./volume";

describe('Test volume...', () => {
    test('two equal volumes of the same unit are equal', () => {
        expect(new Volume().equals(new Volume())).toBe(true);
    })
})