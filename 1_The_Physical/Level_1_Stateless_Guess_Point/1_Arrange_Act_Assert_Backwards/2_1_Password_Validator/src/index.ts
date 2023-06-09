
export class PasswordValidator {
    password: string;
    constructor(password: string) {
        this.password = password;
    }

    isValidLength(): boolean {
        return false
    }
}