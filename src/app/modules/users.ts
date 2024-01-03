export class Users {
    UserId?:number;
    FirstName?: string;
    LastName?: string;
    IdNumber?: number;
    Country?: string;
    Province?: string;
    District? : string;
    Sector?: string;
    Email?: string;
    PhoneNumber?: number;
    Password?: string;
    CreatedOn?: string;

     constructor(user: any)
     {
        this.FirstName = user.FirstName;
        this.LastName = user.LastName;
        this.IdNumber = user.IdNumber;
        this.Country = user.Country;
        this.Province = user.Province;
        this.District = user.District;
        this.Sector = user. Sector;
        this.Email = user.Email;
        this.PhoneNumber = user.PhoneNumber;
        this.Password = user.Password;
        this.CreatedOn = user.CreatedOn;
     }


}
