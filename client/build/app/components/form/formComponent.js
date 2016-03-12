System.register(["angular2/core", "angular2/common", "./customValidator"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, customValidator_1;
    var FormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (customValidator_1_1) {
                customValidator_1 = customValidator_1_1;
            }],
        execute: function() {
            FormComponent = (function () {
                function FormComponent(fb) {
                    this.fb = fb;
                    this.email = new common_1.Control("", common_1.Validators.required);
                    this.email2 = new common_1.Control("", customValidator_1.UsernameValidator.emailValidation);
                    this.name = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, customValidator_1.UsernameValidator.startsWithNumber]));
                    this.password = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(4)]));
                    this.loginForm = this.fb.group({
                        "email": this.email,
                        "email2": this.email2,
                        "name": this.name,
                        "password": this.password
                    });
                }
                FormComponent.prototype.doLogin = function (event) {
                    if (this.loginForm.dirty && this.loginForm.valid) {
                        console.log(this.loginForm.value);
                        event.preventDefault();
                    }
                };
                FormComponent = __decorate([
                    core_1.Component({
                        selector: "form-page",
                        templateUrl: "./app/components/form/form.html"
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], FormComponent);
                return FormComponent;
            }());
            exports_1("FormComponent", FormComponent);
        }
    }
});
