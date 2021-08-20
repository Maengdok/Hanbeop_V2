import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GrammarComponent } from './grammar/grammar.component';
import { GrammarDetailsComponent } from './grammar-details/grammar-details.component';
import { LetterComponent } from './letter/letter.component';
import { CategoryComponent } from './category/category.component';
import { NavbarComponent } from './navbar/navbar.component';
import { YinyangComponent } from './yinyang/yinyang.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GrammarComponent,
    GrammarDetailsComponent,
    LetterComponent,
    CategoryComponent,
    NavbarComponent,
    YinyangComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
