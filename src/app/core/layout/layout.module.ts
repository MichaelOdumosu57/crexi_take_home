// angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// layout componets
import { AppLogoComponent } from './app-logo';
import { FooterComponent } from './footer';
import { HeaderComponent } from './header';
import { PageComponent } from './page';
import { PageNotFoundComponent } from './page-not-found';
import { OverlayLoadingComponent } from './overlay-loading/overlay-loading.component';


// materinal
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';


// ngrx store
import { StoreModule } from '@ngrx/store';
import { getLayoutReducer } from './store/layout.reducer';
import { TranslateModule } from '@ngx-translate/core';
import { SnackBarContentComponent } from './snack-bar-content/snack-bar-content.component';

let material = [
    MatSnackBarModule,
    MatProgressSpinnerModule
]

let components = [
    AppLogoComponent,
    FooterComponent,
    HeaderComponent,
    PageComponent,
    PageNotFoundComponent,
    OverlayLoadingComponent
]

@NgModule({
    declarations: [
        ...components,
        SnackBarContentComponent
    ],
    exports: [
        ...components
    ],
    imports: [
        CommonModule,
        RouterModule,
        ...material,
        TranslateModule,
        BrowserAnimationsModule,
        StoreModule.forFeature('layout', getLayoutReducer),
        
    ]
})
export class LayoutModule {}
