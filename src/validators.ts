export const validators = {
    email: {
        validator: (value: string) => {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const validationResult = re.test(String(value).toLowerCase());
            return validationResult;
        },
        errorMsg: 'Invalid email address',
    },
    login: {
        validator: (value: string) => {
            const validationResult = value.length > 3;
            return validationResult;
        },
        errorMsg: 'Login should have at least 3 letter'
    },
    name: {
        validator: (value: string) => {
            const validationResult = value.length > 3;
            return validationResult;
        },
        errorMsg: 'Name should have at least 3 letters'
    }
}