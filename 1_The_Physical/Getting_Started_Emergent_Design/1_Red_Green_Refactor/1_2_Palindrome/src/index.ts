export function palindromeChecker(input: string) {
 return (input.split("").reverse().join("")) === input
}