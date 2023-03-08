import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgotComponent } from "./pages/forgot/forgot.component";
import { NewUserComponent } from "./pages/newUser/NewUser.component";
import { MainComponent } from "./pages/main/main.component";
import { LoginComponent } from "./pages/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    ForgotComponent,
    NewUserComponent,
    MainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
