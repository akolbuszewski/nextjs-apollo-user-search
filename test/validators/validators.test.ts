import { validators } from "../../src/validators/validators";

describe('validators', () => {
    describe('email validator', () => {
        it('should return false when email is incorrect', () => {
            const emailValidator = validators.email.validator;
            const incorrectEmail = 'incorrect email';

            const isValid = emailValidator(incorrectEmail);

            expect(isValid).toBeFalsy();
        })

        it('should return true when email is correct', () => {
            const emailValidator = validators.email.validator;
            const correctEmail = 'akolbuszewski@gmail.com';

            const isValid = emailValidator(correctEmail);

            expect(isValid).toBeTruthy();
        })

        it('should return false when TLD has is one sign', () => {
            const emailValidator = validators.email.validator;
            const mailWithOneLetterTLD = 'akolbuszewski@gmail.g';

            const isValid = emailValidator(mailWithOneLetterTLD);

            expect(isValid).toBeFalsy();
        })
    }
    )
})