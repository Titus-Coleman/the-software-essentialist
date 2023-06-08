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
        expect(fizzBuzz(90)).toEqual('FizzBuzz')
    })

    it("doesnt accept numbers less than 1 such as -1", () => {
        expect(() => fizzBuzz(-1)).toThrow("Too Small");
      });
    
      it("does not accept numbers over 100 such as 101", () => {
        expect(() => fizzBuzz(101)).toThrow("Too Large");
      });

      it("returns multiples of three such as 3, 6, 9, and 12 as fizz", () => {
        [3, 6, 9, 12]
          .map((multiple) => fizzBuzz(multiple))
          .forEach((m) => expect(m).toEqual("Fizz"));
      });
    
      it("returns multiples of five such as 5, 10, and 20 as buzz", () => {
        [5, 10, 20]
          .map((multiple) => fizzBuzz(multiple))
          .forEach((m) => expect(m).toEqual("Buzz"));
      });
});