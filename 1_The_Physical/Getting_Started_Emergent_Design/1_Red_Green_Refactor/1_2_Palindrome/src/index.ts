export function palindromeChecker(input: string) {
    var noCaseInput = input.toLowerCase().replace(/\s+/g,"");
 return (noCaseInput.split("").reverse().join("")) === noCaseInput;
}