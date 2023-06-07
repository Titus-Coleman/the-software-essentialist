import {fizzBuzz} from './fizzbuzz';

describe("fizzbuzz", () => {
    it('returns a string', () => {
        expect(typeof fizzBuzz(5)).toBe('string')
    })

    it('returns "Fizz" on 3', () => {
        expect(fizzBuzz(3)).toEqual('Fizz')
    })

    it('returns "Fizz" on a multiple of 3', () => {
        expect(fizzBuzz(6)).toEqual('Fizz')
    })
    it('returns the the number if not a multiple of 3 or 5', () => {
        expect(fizzBuzz(17)).toEqual("17")
    })
});
