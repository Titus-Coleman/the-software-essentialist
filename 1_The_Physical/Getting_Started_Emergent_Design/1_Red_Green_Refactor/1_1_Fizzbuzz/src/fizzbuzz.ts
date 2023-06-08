

export class BadInputError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "BadInputError";
    }
}

export function fizzBuzz (input: number): string | Error{
    if(input < 0) {
        throw new BadInputError("Too Small")
    } else if (input > 100) {
        throw new BadInputError("Too Large")
    }

    if ((input % 3 === 0) && (input % 5 === 0))  {
        return "FizzBuzz"; 
    } else if (input % 5 === 0) {
        return "Buzz";
    } else if (input % 3 === 0) {
        return "Fizz";
    }
    return `${input.toString()} is not a multiple of 3 or 5`;

        
}