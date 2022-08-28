import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProfileActions } from "./index";
import { ProfileService } from "../services/profile.service";
import { catchError, concatMap, map } from "rxjs/operators";
import { of } from "rxjs";
import { UtilService } from "@core/utils/utility.service";

@Injectable()
export class ProfileEffects {

  constructor(
    private utilService:UtilService,
    private profileService: ProfileService
  ) { }


  getRandomUser$ = this.utilService.generateEntityEffect(
    ProfileActions.loadingGetRandomProfile,
    "profileDetail.initialLoading",
    "profileDetail.errorLoading",
    this.profileService.getUser,
    ProfileActions.getRandomProfileSuccess,
    ProfileActions.getRandomProfileFail
  )

  listRandomUsers$ = this.utilService.generateEntityEffect(
    ProfileActions.loadingListRandomProfile,
    "profileDetail.initialLoading",
    "profileDetail.errorLoading",
    this.profileService.listUsers,
    ProfileActions.listRandomProfileSuccess,
    ProfileActions.listRandomProfileFail
  )
}