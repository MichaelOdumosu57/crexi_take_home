import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {  ProfileActions } from '@profile//store';
import { AppState } from '@store/reducers';
import { getUserProfile } from '@store/selectors';

@Component({
    selector: 'crx-profile-detail',
    styleUrls: ['./profile-detail.component.scss'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

    user$ = this.store.select(getUserProfile);

    constructor (private store: Store<AppState>) {}

    ngOnInit () {

        this.store.dispatch(ProfileActions.loadingGetRandomProfile());
    }

}
