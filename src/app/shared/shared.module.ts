import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BeadcrumbsComponent } from './beadcrumbs/beadcrumbs.component';



@NgModule({
  declarations: [
    BeadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  exports: [
    BeadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
