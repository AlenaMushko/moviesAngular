import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SupabaseService} from "../../../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  hide = true;
  loginForm: FormGroup;
  alertMessage = 'LOGIN';

  constructor(private formBuilder: FormBuilder, private supabaseService:SupabaseService, private router:Router) {
    this.loginForm = this.formBuilder.group({
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
    })
  }

  ngOnInit(): void {
  }

  async handleLogin(): Promise<void> {
    try {
      const data = await this.supabaseService.login(this.loginForm.value.email, this.loginForm.value.password);

      if (data) {
       sessionStorage.setItem('userName', data.name);
        setTimeout(() => {
          sessionStorage.removeItem('userName');
        }, 60 * 60 * 1000);

        this.alertMessage = 'LOGIN';
        this.loginForm.reset();
        await this.router.navigate(['/movie'])
      } else {
        this.alertMessage =  'Incorrect login or password';
      }
    } catch (error) {
      console.error(error);
      this.alertMessage = 'Incorrect login or password';
    }
  }
}
