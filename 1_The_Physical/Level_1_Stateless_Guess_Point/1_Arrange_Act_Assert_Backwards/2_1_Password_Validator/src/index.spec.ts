import {PasswordValidator} from "./index"
describe('password validator', () => {

  test("Password is between 5 and 15 characters long", () => {
    let passwordValidator = new PasswordValidator("hello");
    expect(passwordValidator.isValidLength()).toBeTruthy();
  })
})


