import {fizzBuzz, BadInputError} from './fizzbuzz';

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
    it('returns "Buzz" if multiple of 5', () => {
        expect(fizzBuzz(50)).toEqual('Buzz')
    })

    it('returns "FizzBuzz" if multiple of 3 AND 5', () => {
        expect(fizzBuzz(900)).toEqual('FizzBuzz')
    })

    it('returns a string stating the input is not a multiple of 3 or 5', () => {
        expect(fizzBuzz(-19)).toEqual('-19 is not a multiple of 3 or 5')
    })
    it('Throws an error stating "input is not a valid number"', () => {
        expect(() => {fizzBuzz("-19")}).toThrowError(new BadInputError("input is not a valid number"))
    })
});