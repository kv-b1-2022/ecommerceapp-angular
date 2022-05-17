import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodsRoutingModule } from './foods-routing.module';
import { AdminComponent } from './admin/admin.component';
import { MenusComponent } from './menus/menus.component';
import { VegetarianComponent } from './vegetarian/vegetarian.component';
import { NonVegetarianComponent } from './non-vegetarian/non-vegetarian.component';
import { AllMenusComponent } from './all-menus/all-menus.component';
import { StartersComponent } from './starters/starters.component';
import { ViewFoodsComponent } from './view-foods/view-foods.component';
import { AddByAdminComponent } from './add-by-admin/add-by-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AdminComponent,
    MenusComponent,
    VegetarianComponent,
    NonVegetarianComponent,
    AllMenusComponent,
    StartersComponent,
    ViewFoodsComponent,
    AddByAdminComponent
  ],
  imports: [
    CommonModule,
    FoodsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ]
})
export class FoodsModule { }
