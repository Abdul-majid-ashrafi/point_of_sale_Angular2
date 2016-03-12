import {Control} from "angular2/common";

// Custom form validation
// Of course we can also write our own custom validators. 
// Here is an example of a validator that checks if the first character is not a number:

interface ValidationResult {
    [key: string]: boolean;
}

export class UsernameValidator {

    static startsWithNumber (control: Control): ValidationResult {
        if ( control.value !== "" && !isNaN(control.value.charAt(0)) ) {
            return { "startsWithNumber" : true };
        }
        return null;
    }

    static emailValidation(control: Control): ValidationResult {
        let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if ( control.value !== "" && !control.value.match(pattern) ) {
            return { "emailValidation": true };
        }
        return null;
    }
}


// One weird thing you might notice is that returning null actually means the validation is valid.
// If we find a number at the first position of the string we return the validation error { “startsWithNumber”: true }