import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public message!: string;
  public subscription!: Subscription;
  public loginForm : FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  public token : any;
  dataService: any;

  constructor(
    private router: Router,
    private data: DataService,
    private LoginService: LoginService,
  ) { }


  get email() : AbstractControl | null {
    return this.loginForm.get('email');
  }

  get password() : AbstractControl | null {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
    localStorage.setItem('Role', 'Admin');
    console.log(localStorage.getItem('Role'));
    this.subscription = this.data.currentMessage.subscribe( message => this.message = message);
  }

  public register() : void {
    this.data.changeMessage('Hello from Register');
    this.router.navigate(['/register']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public login() : void {
    this.data.changeMessage('Hello from Login');
    //this.router.navigate(['/books']);
    
    console.log(this.loginForm.value);
    this.data.changeUserData(this.loginForm.value);
    this.LoginService.login(this.loginForm.value).subscribe(
      (result: any) =>{
        console.log(result);
        this.token = result;
        localStorage.setItem('Role','Admin'); 
        this.router.navigate(['/books']);
      },
      (error: any) => {
        console.error(error);
        this.router.navigate(['/login']);
        this.token = null;
      }
    );
  }
}