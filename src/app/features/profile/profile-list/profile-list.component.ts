// angular
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

// rxjs
import { fromEvent, merge, Observable, Subject, Subscription } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';


// store
import { Store } from '@ngrx/store';
import { ProfileState, UserProfile } from '../interfaces';
import { listUserProfiles } from '../store/profile.selectors';
import { ProfileActions } from '../store';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent {

  constructor(
    private router: Router,
    private store: Store<ProfileState>
  ) { }
  users$: Observable<UserProfile[]> = this.store.select(listUserProfiles);
  ngUnsub = new Subject<void>()

  navigateToUserProfile= (selectedUser?: UserProfile)=> {
    
    let id = selectedUser?.id
    this.router.navigate(["profile/" + (id+1 ?? '')])
  }


}