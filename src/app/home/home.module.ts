import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PageComponent } from './components/page/page.component';
import { CoreModule } from '../core/core.module';
import { EducationComponent } from './components/education/education.component';
import { WorkHistoryComponent } from './components/work-history/work-history.component';


@NgModule({
  declarations: [
    HomeComponent,
    PageComponent,
    EducationComponent,
    WorkHistoryComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule
  ],
  exports:[
    HomeComponent,
    PageComponent
  ]
})
export class HomeModule { }
