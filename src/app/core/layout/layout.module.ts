import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLogoComponent } from './app-logo';
import { FooterComponent } from './footer';
import { HeaderComponent } from './header';
import { PageComponent } from './page';
import { PageNotFoundComponent } from './page-not-found';
import { OverlayLoadingComponent } from './overlay-loading/overlay-loading.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

// ngrx store
import { StoreModule } from '@ngrx/store';
import { getLayoutReducer } from './store/layout.reducer';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
    declarations: [
        AppLogoComponent,
        FooterComponent,
        HeaderComponent,
        PageComponent,
        PageNotFoundComponent,
        OverlayLoadingComponent
    ],
    exports: [
        AppLogoComponent,
        FooterComponent,
        HeaderComponent,
        PageComponent,
        PageNotFoundComponent,
        OverlayLoadingComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatProgressSpinnerModule,
        TranslateModule,
        StoreModule.forFeature('layout', getLayoutReducer),
        
    ]
})
export class LayoutModule {}
