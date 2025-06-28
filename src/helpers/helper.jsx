const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Helper = {
    validateEmail(email) {
        return emailRegex.test(email);
    }
}