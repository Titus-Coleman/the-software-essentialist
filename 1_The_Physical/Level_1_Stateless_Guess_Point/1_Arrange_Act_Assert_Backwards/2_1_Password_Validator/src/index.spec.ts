import {PasswordValidator} from "./index"
describe('password validator', () => {

  test("List of invalid passwords fail", () => {
    ["hello", "thePhysical1234567", "maxwellTheBe","maxwell1_c"]
    .map(word => PasswordValidator.check(word))
    .forEach((w) =>  expect(w).toHaveProperty("error"));
  })

  test("List of valid passwords pass", () => {
    ["Password1", "Jordanisg0at", "Messi1nMiami","mAxwell1_c"]
    .map(word => PasswordValidator.check(word))
    .forEach((w) =>  expect(w).not.toHaveProperty("error"));
  })
})


