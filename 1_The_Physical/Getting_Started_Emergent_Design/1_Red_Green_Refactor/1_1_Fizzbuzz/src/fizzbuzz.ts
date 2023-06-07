

export function fizzBuzz (input: number): string {
    if (input % 3 === 0)  {return "Fizz"; 
} else if (input % 5 === 0) {
        return "Buzz"
    }
    return input.toString();

        
}