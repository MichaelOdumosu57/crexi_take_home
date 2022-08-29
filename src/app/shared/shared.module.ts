import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';


let materialModules = [
  MatButtonModule,
  MatSelectModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports:[
    ...materialModules
  ]
})
export class SharedModule { }
