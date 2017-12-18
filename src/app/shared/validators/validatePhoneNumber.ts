import { FormControl } from '@angular/forms';

export const validatePhoneNumber = (ctrl: FormControl) => {

    let valid = false;
    const phoneNumber = ctrl.value.replace(/\D/g, '');

    if (phoneNumber.length >= 14 && phoneNumber.length <= 15)
        valid = true;

    if (phoneNumber.length >= 10 && phoneNumber.length <= 11)
        valid = true;

    if (phoneNumber.length == 0)
        valid = true;

    return valid ? null : {
        validPhoneNumber: {
            valid: false
        }
    };
}