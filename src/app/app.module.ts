import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgotComponent } from "./pages/forgot/forgot.component";
import { NewUserComponent } from "./pages/newUser/NewUser.component";
import { MainComponent } from "./pages/main/main.component";
import { LoginComponent } from "./pages/login/login.component";
import { SettingsComponent } from './pages/settings/settings.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { MessageComponent } from './pages/message/message.component';
import { SubmitPageComponent } from './pages/submit-page/submit-page.component';
import { SuccessPageComponent } from './pages/success-page/success-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ForgotComponent,
    NewUserComponent,
    MainComponent,
    LoginComponent,
    SettingsComponent,
    DocumentationComponent,
    MessageComponent,
    SubmitPageComponent,
    SuccessPageComponent
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
