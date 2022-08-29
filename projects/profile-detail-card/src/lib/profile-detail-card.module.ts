import { NgModule } from '@angular/core';
import { ProfileDetailCardComponent } from './profile-detail-card.component';

// material
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

let materialModules = [
  MatCardModule,
]


@NgModule({
  declarations: [
    ProfileDetailCardComponent
  ],
  imports: [
    ...materialModules
  ],
  exports: [
    ProfileDetailCardComponent
  ]
})
export class ProfileDetailCardModule { }
