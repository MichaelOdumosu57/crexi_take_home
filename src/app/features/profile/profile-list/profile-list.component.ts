// angular
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


// store
import { Store } from '@ngrx/store';
import { ProfileState, UserProfile } from '../interfaces';
import { listUserProfiles } from '../store/profile.selectors';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent  {

  constructor (
    private router:Router,
    private store:Store<ProfileState>
  ) {}
  users$:Observable<UserProfile[]> = this.store.select(listUserProfiles);



  navigateToUserProfile(selectedUser?:UserProfile){
    let id =selectedUser?.id
    this.router.navigate(["profile/"+(id ?? '')])
  }






}