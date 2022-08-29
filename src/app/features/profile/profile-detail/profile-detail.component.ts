import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// ngrx
import { Store } from '@ngrx/store';
import { ProfileActions } from '@profile//store';
import { AppState } from '@store/reducers';
import { getUserProfile, pickUserProfile } from '@store/selectors';
import { Observable, Subject } from 'rxjs';
// rxjs
import { tap } from 'rxjs/operators';
import { env } from 'src/environments/environment';

@Component({
  selector: 'crx-profile-detail',
  styleUrls: ['./profile-detail.component.scss'],
  templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit {

  user$: Observable<any>;
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    
  ) { }

  ngUnsub= new Subject()

  ngOnInit() {

    this.updateUser$BasedOnGetUserStrategy();
    this.determineHowToLoadUserProfile();
  }


  determineHowToLoadUserProfile() {
    if (env.profileDetail.getUserStrategy === "api") {

      this.store.dispatch(ProfileActions.loadingGetRandomProfile());
    }
    else {
      this.route.params
        .pipe(
          tap((result) => {
            this.store.dispatch(ProfileActions.updateCurrentUserId({ id: +result.id-1 }));
          })
        )
        .subscribe();
    }
  }

  updateUser$BasedOnGetUserStrategy() {
    this.user$ = {
      "api": this.store.select(getUserProfile),
      "route": this.store.select(pickUserProfile)
    }[env.profileDetail.getUserStrategy];
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
   }
}
