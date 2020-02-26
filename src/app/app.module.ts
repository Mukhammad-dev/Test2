import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import {Routes} from '@angular/router';
//import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import {MyStoreComponent} from './myStore/myStore.component';
import { ProductAlertsComponent  } from "./product-alerts/product-alerts.component";

const appRoutes: Routes = [
  { path: 'myStore', component: MyStoreComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    MyStoreComponent,
    ProductAlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
