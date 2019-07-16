import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { LeadsListComponent } from './pages/leads-list/leads-list.component';

const routes: Routes = [
  { path: '', component: LeadsListComponent },
  { path: 'signin', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'leads', component: LeadsListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    LeadsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
