import {Component} from "angular2/core";
import {FormBuilder, Validators, ControlGroup, Control} from "angular2/common";
import {UsernameValidator} from "./customValidator";





@Component({
  selector: "form-page",
  templateUrl: "./app/components/form/form.html"
})
export class FormComponent {

    name: Control;
    email: Control;
    email2: Control;
    password: Control;

    loginForm: ControlGroup;

    constructor(private fb: FormBuilder) {
        this.email = new Control("", Validators.required);
        this.email2 = new Control("", UsernameValidator.emailValidation);
        this.name = new Control( "", Validators.compose([Validators.required, UsernameValidator.startsWithNumber]) );
        this.password = new Control( "", Validators.compose([Validators.required, Validators.minLength(4)]) );

        this.loginForm = this.fb.group({
            "email": this.email,
            "email2": this.email2,
            "name": this.name,
            "password": this.password
        });
    }

    doLogin(event) {
        if (this.loginForm.dirty && this.loginForm.valid) {
            console.log(this.loginForm.value);
            event.preventDefault();
        }
    }

}