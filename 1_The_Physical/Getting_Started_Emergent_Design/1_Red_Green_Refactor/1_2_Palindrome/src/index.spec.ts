import { palindromeChecker } from "./index"


describe("Palindrome Checker", () => {

    it("Palindromes return true", () => {
    ["mom", "Mom", "MoM", "Never Odd or Even","1Never Odd or Even1"]
        .map((word) => palindromeChecker(word))
        .forEach((m) => expect(m).toBeTruthy())
    })

    it("Palindromes return false", () => {
        ["Momx","Never Odd or Even1"]
            .map((word) => palindromeChecker(word))
            .forEach((m) => expect(m).toBeFalsy())
        })

    // it('"mom" returns true', () =>{
    //     expect(palindromeChecker("mom")).toBeTruthy()
    // })

    // it('"Mom" returns true', () =>{
    //     expect(palindromeChecker("Mom")).toBeTruthy()
    // })

    // it('"MoM" returns true', () =>{
    //     expect(palindromeChecker("MoM")).toBeTruthy()
    // })

    // it('"Momx" returns false', () =>{
    //     expect(palindromeChecker("Momx")).toBeFalsy()
    // })

    // it('"xMomx" returns true', () =>{
    //     expect(palindromeChecker("xMomx")).toBeTruthy()
    // })

    // it('"Was It A Rat I Saw" returns true', () =>{
    //     expect(palindromeChecker("Was It A Rat I Saw")).toBeTruthy()
    // })

    // it('"Never Odd or Even" returns true', () =>{
    //     expect(palindromeChecker("Never Odd or Even")).toBeTruthy()
    // })

    // it('"Never Odd or Even1" returns false', () =>{
    //     expect(palindromeChecker("Never Odd or Even1")).toBeFalsy()
    // })

    // it('"1Never Odd or Even1" returns true', () =>{
    //     expect(palindromeChecker("1Never Odd or Even1")).toBeTruthy()
    // })
})