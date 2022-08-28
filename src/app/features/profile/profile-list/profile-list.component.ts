// angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// rxjs
import {tap,takeUntil} from 'rxjs/operators'
// ngrx
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { ProfileActions } from '../store';
import { listUserProfiles } from '../store/profile.selectors';
import { Subject } from 'rxjs';
import { UserProfile } from '../interfaces';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent  {

  users$ = this.store.select(listUserProfiles);
  ngUnsub = new Subject<void>()

  constructor (
    private store: Store<AppState>,
    private router:Router
  ) {}

  ngOnInit () {

    this.users$.pipe(
      takeUntil(this.ngUnsub),
      tap((result)=>{
        if(result.length === 0){
          this.store.dispatch(ProfileActions.loadingListRandomProfile());
        }
      })
    )
    .subscribe()
}

  navigateToUserProfile(selectedUser:UserProfile){
    let {id} =selectedUser

    this.router.navigate(["profile/"+id])
  }

  ngOnDestroy() {
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }




}