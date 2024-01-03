import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-sign-ip',
  templateUrl: './user-sign-ip.component.html',
  styleUrls: ['./user-sign-ip.component.css']
})
export class UserSignIpComponent implements OnInit{

  PhoneNumber: string = '';
  Password: string = '';

  constructor(private userService: UserService, private router: Router)
  {

  }
  ngOnInit(): void {
    
  }
  signin()
  {
    const phoneNumberAsNumber = +this.PhoneNumber;
    this.userService.login(phoneNumberAsNumber, this.Password).subscribe((Response:any)=>{
      this.router.navigateByUrl('/userhomepage');
    }, error => {
      console.log('Error:', error);
      window.alert('Login Failed');
      this.router.navigateByUrl('/signin')
    })
  }
}
