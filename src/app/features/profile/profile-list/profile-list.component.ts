import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { ProfileActions } from '../store';
import { listUserProfiles } from '../store/profile.selectors';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent  {

  users$ = this.store.select(listUserProfiles);

  constructor (private store: Store<AppState>) {}

  ngOnInit () {

      this.store.dispatch(ProfileActions.loadingListRandomProfile());
  }



}