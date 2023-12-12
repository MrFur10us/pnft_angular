import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent {
  public inputText = '' 
  public passwordShow = false;
  public checkboxToggle = false;
  public disableText = false;


  public btnText = 'Send letter'


  public progress = 30;
  public car = 'Audi';
}


