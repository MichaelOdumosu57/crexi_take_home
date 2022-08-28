import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// ngrx
import { Store } from '@ngrx/store';
import { ProfileActions } from '@profile//store';
import { AppState } from '@store/reducers';
import { getUserProfile, pickUserProfile } from '@store/selectors';
import { Observable } from 'rxjs';
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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.user$ = {
      "api": this.store.select(getUserProfile),
      "route": this.store.select(pickUserProfile)
    }[env.profileDetail.getUserStrategy]


    if (env.profileDetail.getUserStrategy === "api") {

      this.store.dispatch(ProfileActions.loadingGetRandomProfile());
    }
    else {
      this.route.params
        .pipe(
          tap((result) => {
            console.log(result)
            this.store.dispatch(ProfileActions.updateCurrentUserId({ id: result.id }))
          })
        )
        .subscribe()
    }
  }

}
