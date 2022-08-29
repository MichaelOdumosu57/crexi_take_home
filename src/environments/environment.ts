// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export class DevEnv {


  production = false
  endpoints = {
    getRandomUser:"https://randomuser.me/api/",
    listRandomUsers:"https://randomuser.me/api/?results="
  }
  profileDetail={
    getUserStrategy:"route" // "api" | "route"
  }
  readonly profileList={
    amntOfUsersLimit:10,
    amountOfUsersToList:2,
    amntOfPixelsFromBottomBeforeRetrievingData:5
  }
  threeJSBackground ={
    cameraProfilesPosition:{
      x:0,y:0,z:9  
    },
    cameraProfilePosition:{
      x:-12.5,y:0,z:11  
    }
  }
  nav ={
    profilesPage:"/profiles",
    profilePage:"/profile"
  }
}
export const env = new DevEnv()

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
