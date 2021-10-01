import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { LandingComponent } from './components/landing/landing.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: 'books', component: BooksComponent },
  { path: 'users', component: UsersComponent },
  { path: 'aboutus', component: LandingComponent },
  { path: 'signup', component: RegisterUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
