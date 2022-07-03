import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../auth/role.guard';
import { AddbookComponent } from './addbook/addbook.component';
import { DeletebookComponent } from './deletebook/deletebook.component';
import { DisplaybookComponent } from './displaybook/displaybook.component';
import { SearchbookdeptComponent } from './searchbookdept/searchbookdept.component';
import { SearchbooknameComponent } from './searchbookname/searchbookname.component';


const routes: Routes = [
  {path:'displaybook',component:DisplaybookComponent},
  {path:'searchbookname',component:SearchbooknameComponent},
  {path:'searchbookdept',component:SearchbookdeptComponent},
  {
    path:'addbook',component:AddbookComponent,canActivate:[RoleGuard]
  },
  {path:'deletebook',component:DeletebookComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
