import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthGuard } from './auth.guard';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';


const routes: Routes = [{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'books',component:BooksComponent},
{path:'authors',component:AuthorsComponent},
{path:'updatebook', component:UpdatebookComponent},
{path:'updateauthor', component:UpdateauthorComponent},
{path:'addbook',
canActivate:[AuthGuard],
component:AddbookComponent},
{path:'addauthor',
canActivate:[AuthGuard],
component:AddauthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
