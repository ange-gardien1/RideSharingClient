import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Users } from '../modules/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  databaseUrl: string = "http://localhost:5002/api/Users";
  private tokenName: string = 'myUserToken';
  private _isLoggedIn =  new BehaviorSubject(false);
  isLoggedIn = this._isLoggedIn.asObservable();
  

  constructor(private http: HttpClient) {
    if(localStorage.getItem(this.tokenName))
    {
      this._isLoggedIn.next(true);
    }
   }

   SignUp(newUser: Users)
   {
    delete newUser.CreatedOn;
    return this.http.post(this.databaseUrl + '/register', newUser);

   }
   login(PhoneNumber: number, Password : string)
   {
    let querryParasm = new HttpParams();
    querryParasm = querryParasm.append('PhoneNumber',PhoneNumber);
    querryParasm = querryParasm.append('Password',Password);

    return this.http.get(`${this.databaseUrl}/login`,{params: querryParasm,responseType: 'text'})
    .pipe(tap((Response:any)=>{
      localStorage.setItem(this.tokenName,Response);
      if (Response)
      {
        this._isLoggedIn.next(true);
      }
      else
      {
        this._isLoggedIn.next(false)
      }
    }));
   }
   logout()
   {
    localStorage.removeItem(this.tokenName);
    this._isLoggedIn.next(false);
   }

   getCurrentUser(): Observable<Users>
   {
    let reqHeaders = {
      Authorization : `Bearer ${localStorage.getItem(this.tokenName)}`
    }
    return this.http.get<Users>(`${this.databaseUrl}/current`,{headers: reqHeaders})
   }

   getUser(UserId: number):Observable<Users>
   {
    return this.http.get<Users>(`${this.databaseUrl}/${UserId}`)
   }
   searchUsers(searchText: string): Observable<Users[]>
   {
    return this.http.get<Users[]>(`${this.databaseUrl}/Search/${searchText}`)
   }
}
