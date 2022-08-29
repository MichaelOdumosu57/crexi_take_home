// angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// rxjs
import {tap,takeUntil} from 'rxjs/operators'
// ngrx
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { ProfileActions } from '../store';
import { listUserProfiles } from '../store/profile.selectors';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.scss']
})
export class ProfileMainComponent implements OnInit {

  
  users$ = this.store.select(listUserProfiles);
  ngUnsub = new Subject<void>()

  constructor (
    private store: Store<AppState>,
    
  ) {}

  ngOnInit () {

    // this.users$.pipe(
    //   takeUntil(this.ngUnsub),
    //   tap((result)=>{
    //     if(result.length === 0){
    //       this.store.dispatch(ProfileActions.loadingListRandomProfile());
    //     }
    //   })
    // )
    // .subscribe()
}



  ngOnDestroy() {
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}
