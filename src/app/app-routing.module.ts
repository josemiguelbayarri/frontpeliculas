import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { InfoMoviesComponent } from './components/info-movies/info-movies.component';
import { IndexComponent } from './components/index/index.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path:"display", component:FilmsListComponent},
  {path:"info", component:InfoMoviesComponent},
  {path:"", component:IndexComponent},
  {path:"search", component:BusquedaComponent},
  {path:"signup", component:SignupComponent},
  {path:"login", component:LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
