

export class BadInputError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "BadInputError";
    }
}

export function fizzBuzz (input: any): string | Error{
    if(typeof input != 'number') {
        throw new BadInputError("input is not a valid number")
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