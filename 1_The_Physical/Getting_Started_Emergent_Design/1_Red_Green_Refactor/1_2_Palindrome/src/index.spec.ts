import { palindromeChecker } from "./index"


describe("Palindrome Checker", () => {
    it('"mom" returns true', () =>{
        expect(palindromeChecker("mom")).toBeTruthy()
    })

    it('"Mom" returns true', () =>{
        expect(palindromeChecker("Mom")).toBeTruthy()
    })
})