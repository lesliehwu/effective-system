import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListComponent} from './list/list.component';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';
const routes: Routes = [
    {path:'',pathMatch:'full',component:HomeComponent,children:[]},
    {path:'list',pathMatch:'full',component:ListComponent,children:[]},
    {path:'add',pathMatch:'full',component:AddComponent,children:[]},
    {path:'edit/:id',pathMatch:'full',component:EditComponent,children:[]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
