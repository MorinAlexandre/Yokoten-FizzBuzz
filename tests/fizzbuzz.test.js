import { fizzbuzz } from "../src/fizzbuzz.js";

describe("FizzBuzz", () => {
    test("returns the number when not a multiple of 3 or 5", () => {
        expect(fizzbuzz(5)).toBe(1);
    });
});