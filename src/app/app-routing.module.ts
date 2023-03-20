import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from "./pages/forgot/forgot.component";
import { MainComponent } from "./pages/main/main.component";
import { NewUserComponent } from "./pages/newUser/NewUser.component";
import { LoginComponent } from "./pages/login/login.component";
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { MessageComponent } from './pages/message/message.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SubmitPageComponent } from './pages/submit-page/submit-page.component';
import { SuccessPageComponent } from './pages/success-page/success-page.component';

const routes: Routes = [
  { path: 'forgot', component: ForgotComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'main', component: MainComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'message', component: MessageComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'submit-page', component: SubmitPageComponent },
  { path: 'success-page', component: SuccessPageComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
