
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

    check() {
        //TODO iterate through all methods and output each result as object values.
        return {}
    }
}