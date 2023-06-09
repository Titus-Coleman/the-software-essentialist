import {PasswordValidator} from "./index"
describe('password validator', () => {

  test("Password is under 5 characters long - invalid", () => {
    let passwordValidator = new PasswordValidator("hello");
    expect(passwordValidator.isValidLength()).toBeFalsy();
  })

  test("Password is under 5 characters and over 15 characters long - invalid", () => {
    let passwordValidator = new PasswordValidator("thePhysical1234567");
    expect(passwordValidator.isValidLength()).toBeFalsy();
  })

  test("Password is between 5 and 15 characters long - valid", () => {
    let passwordValidator = new PasswordValidator("helloworld");
    expect(passwordValidator.isValidLength()).toBeTruthy();
  })

  test("Password contains at least one digit", () => {
    let passwordValidator = new PasswordValidator("password1");
    expect(passwordValidator.containsDigit()).toBeTruthy();
  })
  test("Password does not contain at least one digit", () => {
    let passwordValidator = new PasswordValidator("maxwellTheBe");
    expect(passwordValidator.containsDigit()).toBeFalsy();
  })

  test("Password contains at least one uppercase letter", () => {
    let passwordValidator = new PasswordValidator("Password1");
    expect(passwordValidator.containsUppercase()).toBeTruthy();
  })
  test("Password does not contain at least one uppercase letter", () => {
    let passwordValidator = new PasswordValidator("maxwell1_c");
    expect(passwordValidator.containsUppercase()).toBeFalsy();
  })

  test("Password is checked and returns object", () => {
    let passwordValidator = new PasswordValidator("Jordanisg0at");
    expect(passwordValidator.check()).toBeInstanceOf(Object);
  })

  test("Password is checked, invalid and returns object with error key", () => {
    let passwordValidator = new PasswordValidator("mf");
    expect(passwordValidator.check()).toHaveProperty("error");
  })

  test("Password is checked, valid and returns object without error key", () => {
    let passwordValidator = new PasswordValidator("Messi1nMiami");
    expect(passwordValidator.check()).not.toHaveProperty("error");
  })
})


