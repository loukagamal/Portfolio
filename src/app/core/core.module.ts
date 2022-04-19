import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { RightMenuComponent } from './right-menu/right-menu.component';

@NgModule({
  declarations: [LeftMenuComponent, RightMenuComponent],
  imports: [CommonModule],
  exports: [LeftMenuComponent, RightMenuComponent],
})
export class CoreModule {}
