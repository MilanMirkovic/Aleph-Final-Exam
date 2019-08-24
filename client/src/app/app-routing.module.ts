import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateAuthGuard } from './security/can-activate-auth.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { MainComponent } from './main/main.component';
import { ProjekatDetailsComponent } from './projekat-details/projekat-details.component';

const routes: Routes = [
  {path: 'main/projekat/:id', component:ProjekatDetailsComponent},
  { path: 'main', component: MainComponent },  

  { path: 'login', component: LoginComponent},  
  // { path: '', redirectTo: 'main', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
