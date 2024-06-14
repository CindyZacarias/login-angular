import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormBuilder, FormGroup, Validators],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm=this.formBuilder.group({
    email:['prueba@prueba.com', [Validators.required, Validators.email]],
    password:['', Validators.required],
  })
  constructor(private formBuilder:FormBuilder) {}

  ngOnInit(): void {
    
  }

}
