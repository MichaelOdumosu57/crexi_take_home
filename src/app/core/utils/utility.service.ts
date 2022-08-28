import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ActionCreator, TypedAction } from "@ngrx/store/src/models";
import { Observable, of } from "rxjs";
import { catchError, concatMap, map } from "rxjs/operators";

@Injectable({providedIn:'root'})
export class UtilService{

  constructor(
    private actions$: Actions,
  ) { }

  generateEntityEffect(
    loadingAction:ActionCreator<string, () => TypedAction<string>>,
    asyncObsFn:() => Observable<any>,
    successAction:ActionCreator<string, (props:{result:any}) => TypedAction<string>>,
    failAction:ActionCreator<string, (props:{error:any}) => TypedAction<string>>,
  ){
    let callback = ()=>{
      return this.actions$
      .pipe(
        ofType(loadingAction),
        concatMap(() => {
          return asyncObsFn()
            .pipe(
              map((result) => successAction({result}) ),
              catchError((error) => of(failAction({error})))
            )
        })
      )
    }
    return createEffect(callback)
  }
}