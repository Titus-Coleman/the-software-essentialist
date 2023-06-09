export function palindromeChecker(input: string) {
    var noCaseInput = input.toLowerCase()
 return (noCaseInput.split("").reverse().join("")) === noCaseInput
}