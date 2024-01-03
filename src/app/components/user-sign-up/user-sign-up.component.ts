import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/modules/users';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit{

  newUser: Users = new Users({});
  newuser: any = {};
  currentStep: number = 1;
  totalSteps: number = 5; 
  newUserForm: FormGroup;

  constructor(private userService: UserService, private router:Router, private fb: FormBuilder){
    this.newUserForm = this.fb.group({
      FirstName:  ['', Validators.required],
      LastName: ['', Validators.required],
      // IdNumber: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    
  }
  signUp()
  {
    this.userService.SignUp(this.newUser).subscribe(() => {
      this.router.navigate(['signin']);

    }, error => {
      if (error.status === 500)
      {
        window.alert("Phone Number is alread registered");
      }
      window.alert("User registration failed");
      console.log('Error:', error)
    });
  }
  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}
