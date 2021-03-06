import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PageComponent } from './components/page/page.component';
import { CoreModule } from '../core/core.module';
import { EducationComponent } from './components/education/education.component';
import { WorkHistoryComponent } from './components/work-history/work-history.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    PageComponent,
    EducationComponent,
    WorkHistoryComponent,
    PortfolioComponent,
    ContactComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, CoreModule],
  exports: [
    HomeComponent,
    PageComponent,
    EducationComponent,
    WorkHistoryComponent,
    PortfolioComponent,
    ContactComponent,
  ],
})
export class HomeModule {}
