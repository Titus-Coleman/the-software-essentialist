import { palindromeChecker } from "./index"


describe("Palindrome Checker", () => {
    it('"mom" returns true', () =>{
        expect(palindromeChecker("mom")).toBeTruthy()
    })

    it('"Mom" returns true', () =>{
        expect(palindromeChecker("Mom")).toBeTruthy()
    })

    it('"MoM" returns true', () =>{
        expect(palindromeChecker("MoM")).toBeTruthy()
    })

    it('"Momx" returns false', () =>{
        expect(palindromeChecker("Momx")).toBeFalsy()
    })

    it('"xMomx" returns true', () =>{
        expect(palindromeChecker("xMomx")).toBeTruthy()
    })
})