export class PasswordValidator {
    static isValidLength(password: string): boolean {
        return password.length > 5 && password.length < 15;
    }

    static containsDigit(password: string): boolean {
        return (/\d/g).test(password);
    }

    static containsUppercase(password: string): boolean {
        return (/[A-Z]/g).test(password);
    }

    static check(password: string) {
        const result = {
            isValidLength: PasswordValidator.isValidLength(password),
            containsDigit: PasswordValidator.containsDigit(password),
            containsUppercase: PasswordValidator.containsUppercase(password)
        };

        const errors = Object.entries(result)
            .filter(([key, value]) => !value)
            .map(([key]) => `Error: ${key} is false.`);

       return (errors.length > 0) ? { error: errors } : result;
    }
}