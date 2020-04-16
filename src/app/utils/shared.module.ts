import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FullscreenComponent } from '../widgets/fullscreen/fullscreen.component';
import { LayoutComponent } from '../widgets/layout/layout.component';
import { ToggleComponent } from '../widgets/toggle/toggle.component';



@NgModule({
  declarations: [
    FullscreenComponent,
    LayoutComponent,
    ToggleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[
    FullscreenComponent,
    ReactiveFormsModule,
    LayoutComponent,
    ToggleComponent
  ]
})
export class SharedModule { }
