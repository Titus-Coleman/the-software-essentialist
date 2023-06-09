
export class PasswordValidator {
    password: string;
    constructor(password: string) {
        this.password = password;
    }

    isValidLength(): boolean {
      return this.password.length > 5 && this.password.length < 15 ? true : false
    }

    containsDigit(): boolean {
        const regex = /\d/;
        return regex.test(this.password) ? true : false
    }

    containsUppercase(): boolean {
        // const regex = TODO ;
        return (/[A-Z]/).test(this.password) ? true : false
    }
}