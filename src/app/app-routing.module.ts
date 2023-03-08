import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from "./pages/forgot/forgot.component";
import { MainComponent } from "./pages/main/main.component";
import { NewUserComponent } from "./pages/newUser/NewUser.component";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
  { path: 'forgot', component: ForgotComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'main', component: MainComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
