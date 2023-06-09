
export class PasswordValidator {
    password: string;
    constructor(password: string) {
        this.password = password;
    }

    isValidLength(): boolean {
        if ((this.password.length > 5) && this.password.length < 15 ){
        return true
        }
        return false
}
}