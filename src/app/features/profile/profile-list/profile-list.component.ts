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

  navigateToUserProfile(selectedUser?: UserProfile) {
    let id = selectedUser?.id
    this.router.navigate(["profile/" + (id ?? '')])
  }

  ngOnInit() {
    this.checkIfInitialProfilesWereLoaded().subscribe()
  }

  checkIfInitialProfilesWereLoaded(){
    return this.users$
    .pipe(
      takeUntil(this.ngUnsub),
      tap((result)=>{
        if(result.length ===0){
          this.store.dispatch(ProfileActions.loadingListRandomProfile());
        }
        else if(result.length < 10){
          this.initLoadOnScrollBottomSub =this.initLoadOnScrollBottom().subscribe()
        }
        else if(result.length === 10){
          this.initLoadOnScrollBottomSub?.unsubscribe()
        }
      })
    )
  
  }

  initLoadOnScrollBottomSub:Subscription
  initLoadOnScrollBottom() {
    return  merge(
      fromEvent(window, 'scroll'),
      fromEvent(window, 'resize')
    )
      .pipe(
        takeUntil(this.ngUnsub),
        tap(() => {
          let xPixelsFromTheBottom = this.determineXPixelsFromBottom();
          if(xPixelsFromTheBottom < 5){
            this.store.dispatch(ProfileActions.loadingListRandomProfile());
          }
        })
      )

  }

  determineXPixelsFromBottom() {
    let element = document.documentElement;
    let xPixelsFromTheBottom = Math.abs(
      ((element.scrollHeight - element.scrollTop) - element.clientHeight)
    );
    return xPixelsFromTheBottom;
  }

  ngOnDestroy() {
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }
}