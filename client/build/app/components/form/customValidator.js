System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UsernameValidator;
    return {
        setters:[],
        execute: function() {
            UsernameValidator = (function () {
                function UsernameValidator() {
                }
                UsernameValidator.startsWithNumber = function (control) {
                    if (control.value !== "" && !isNaN(control.value.charAt(0))) {
                        return { "startsWithNumber": true };
                    }
                    return null;
                };
                UsernameValidator.emailValidation = function (control) {
                    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
                    if (control.value !== "" && !control.value.match(pattern)) {
                        return { "emailValidation": true };
                    }
                    return null;
                };
                return UsernameValidator;
            }());
            exports_1("UsernameValidator", UsernameValidator);
        }
    }
});
// One weird thing you might notice is that returning null actually means the validation is valid.
// If we find a number at the first position of the string we return the validation error { “startsWithNumber”: true } 
