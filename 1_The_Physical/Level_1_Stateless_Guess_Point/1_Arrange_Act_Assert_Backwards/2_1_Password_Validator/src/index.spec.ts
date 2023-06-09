import {PasswordValidator} from "./index"
describe('password validator', () => {

  test("Password is under characters long - invalid", () => {
    let passwordValidator = new PasswordValidator("hello");
    expect(passwordValidator.isValidLength()).toBeFalsy();
  })

  test("Password is over 15 characters long - invalid", () => {
    let passwordValidator = new PasswordValidator("hello20990e120e909201109");
    expect(passwordValidator.isValidLength()).toBeFalsy();
  })
})


