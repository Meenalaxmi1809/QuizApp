import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuizStepperComponent } from './quiz-stepper/quiz-stepper.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
 
  { path: 'quizStepper', component: QuizStepperComponent },
  


  {
    path: 'Auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) ,
  },
    {
    path: '**',
    loadChildren: () => import('./shared/shared/shared.module').then(m => m.SharedModule) ,  
  },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
