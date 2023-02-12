import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl,FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm : FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl('User')
  })

  public token : any;

  constructor(
    private router: Router,
    private data: DataService,
    private RegisterService : RegisterService
  ) { }

  get username() :AbstractControl{
    return this.registerForm.get('username')!;
  }

  get password() :AbstractControl{
    return this.registerForm.get('password')!;
  }

  public register() : void {
    this.data.changeMessage('Hello from Register');

    console.log(this.registerForm.value);
    this.data.changeUserData(this.registerForm.value);
    this.RegisterService.signup(this.registerForm.value).subscribe(
      (result: any) =>{
        console.log(result);
        this.token = result;
        localStorage.setItem('Role','Admin'); 
        this.router.navigate(['/login']);
      },
      (error: any) => {
        console.error(error);
        this.router.navigate(['/register']);
        this.token = null;
      }
    );
  }

  ngOnInit(): void {
  }
  
}
