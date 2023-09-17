import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SupabaseService} from "../../../../services";
import {Router} from "@angular/router";

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
    hide = true;
    registerForm: FormGroup;
    alertMessage = 'REGISTER';

    constructor(private formBuilder: FormBuilder, private supabaseService: SupabaseService, private router: Router) {
        this.registerForm = this.formBuilder.group({
            email: formBuilder.control('', [
                Validators.email,
                Validators.required,
                Validators.maxLength(20)
            ]),
            password: formBuilder.control('', [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(20)
            ]),
            name: formBuilder.control('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(20)
            ])
        })
    }

    ngOnInit(): void {
    }

    async handleRegister(): Promise<void> {
        const existingUser = await this.supabaseService.checkExistingUser(this.registerForm.value.email);

        if (existingUser?.data?.email === this.registerForm.value.email) {
            this.alertMessage = 'A user with this email already exists.';
            return;
        }

        await this.supabaseService.register(this.registerForm.value.name, this.registerForm.value.email, this.registerForm.value.password);

        this.alertMessage = 'REGISTER';
        this.registerForm.reset();
        await this.router.navigate(['/login'])
    }
}
