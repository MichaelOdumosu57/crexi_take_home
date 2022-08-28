import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GetUserAPISuccessModel, UserProfile } from "@interfaces";
import { forkJoin } from "rxjs";
import { map, pluck, tap, delay } from "rxjs/operators";
import { env } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class ProfileService {

  constructor(
    private http: HttpClient
  ) {

  }
  getUser = (raw: boolean = false) => {

    return this.http.get(
      env.endpoints.getRandomUser
    )
      .pipe(
        raw ? tap() : map(getUserSuccess)
      )
  }

  listUsers = (raw: boolean = false) => {

    return this.http.get(
      env.endpoints.listRandomUsers
    )
      .pipe(
        raw ? tap() : map(listUserSuccess)
      )
  }
}

// transformation functions
let getUserSuccess = (apiData: GetUserAPISuccessModel) => {




  let [randomUser] = apiData.results
  let uiData = new UserProfile({
    cellNumber: randomUser.cell,
    city: randomUser.location.city,
    dateOfBirth: randomUser.dob.date,
    email: randomUser.email,
    firstName: randomUser.name.first,
    lastName: randomUser.name.last,
    phoneNumber: randomUser.phone,
    picture: randomUser.picture.medium,
    state: randomUser.location.state
  })
  return uiData

}

let listUserSuccess = (apiData: GetUserAPISuccessModel) => {

  let uiData = apiData.results.map((apiUser,index0) => {
    let uiUser = getUserSuccess({ info: apiData.info, results: [apiUser] })
    uiUser.id = index0
    return uiUser
  })
  return uiData

}