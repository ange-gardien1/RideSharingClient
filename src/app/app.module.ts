import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { UserSignUpComponent } from './components/user-sign-up/user-sign-up.component';
import { UserSignIpComponent } from './components/user-sign-ip/user-sign-ip.component';
import { FormsModule } from '@angular/forms';
import { UserHomePageComponent } from './components/user-home-page/user-home-page.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserSignUpComponent,
    UserSignIpComponent,
    UserHomePageComponent,
    IndexPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
