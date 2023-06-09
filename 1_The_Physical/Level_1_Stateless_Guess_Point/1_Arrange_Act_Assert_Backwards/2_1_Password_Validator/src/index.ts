
export class PasswordValidator {
    password: string;
    constructor(password: string) {
        this.password = password;
    }

    isValidLength(): boolean {
      return this.password.length > 5 && this.password.length < 15 ? true : false
    }

    containsDigit(): boolean {
        return (/\d/).test(this.password) ? true : false
    }

    containsUppercase(): boolean {
        return (/[A-Z]/).test(this.password) ? true : false
    }

   checkObjectValues(obj: any) {
        obj.error = [];
      
        for (let key in obj) {
          if (!obj[key]) {
            obj.error.push("Error: " + key + " is false.");
          }
        }
      
        if (obj.error.length === 0) {
          delete obj.error; // Remove the errors key if there are no errors
        }
        return obj;
      }

    check() {
        // Still needs to return error key with message
        const result =  {
          isValidLength: this.isValidLength(),
          containsDigit: this.containsDigit(),
          containsUppercase: this.containsUppercase()
        };
        return this.checkObjectValues(result)
      }
}