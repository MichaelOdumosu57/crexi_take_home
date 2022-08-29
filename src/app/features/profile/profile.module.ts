// angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


// misc
import { LayoutModule } from '@core/layout/layout.module';
import { ProfileDetailComponent } from './profile-detail';

// @ngrx
import { StoreModule } from '@ngrx/store';
import { getProfileReducer } from './store/profile.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './store/profile.effects';

// i18n
import { TranslateModule } from '@ngx-translate/core';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileMainComponent } from './profile-main/profile-main.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileDetailCardModule } from 'projects/profile-detail-card/src/public-api';


@NgModule({
    declarations: [
        ProfileDetailComponent,
        ProfileListComponent,
        ProfileMainComponent,
    ],
    exports: [
        ProfileDetailComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        ProfileDetailCardModule,
        HttpClientModule,
        TranslateModule,
        RouterModule,
        StoreModule.forFeature('profile', getProfileReducer),
        EffectsModule.forFeature([ProfileEffects])
    ]
})
export class ProfileModule { }
