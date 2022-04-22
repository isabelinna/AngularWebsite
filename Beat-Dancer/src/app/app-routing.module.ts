import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Añadir rutas
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

//Declarar rutas (Al entrar a la página nos llevara a home)
const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full'},
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
