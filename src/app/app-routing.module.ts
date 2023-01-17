import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Stock } from './model/stock';
import { User } from './model/user';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockComponent } from './stock/stock/stock.component';
import { PeopleComponent } from './people/people.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'stock', component: StockComponent},
  { path: 'user/management', component: UserComponent},
  { path: 'People', component:PeopleComponent},    
  { path: '', redirectTo: '/login', pathMatch: 'full' }

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static array: any;
}
export const routingComponents=[StockComponent,PeopleComponent]



