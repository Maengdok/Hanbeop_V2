import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrammarDetailsComponent } from './grammar-details/grammar-details.component';
import { HomeComponent } from './home/home.component';
import { YinyangComponent } from './yinyang/yinyang.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: "grammaire/:id", component: GrammarDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
