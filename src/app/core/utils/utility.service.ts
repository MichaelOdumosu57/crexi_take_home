import { Injectable } from "@angular/core";
import { LayoutActions } from "@core/layout/store";
import { LayoutState } from "@interfaces";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { ActionCreator, TypedAction } from "@ngrx/store/src/models";
import { Observable, of } from "rxjs";
import { catchError, concatMap, map,finalize } from "rxjs/operators";

@Injectable({providedIn:'root'})
export class UtilService{

  constructor(
    private actions$: Actions,
    private store:Store<LayoutState>
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
          this.store.dispatch(LayoutActions.showOverlayLoading())
          return asyncObsFn()
            .pipe(
              map((result) => successAction({result}) ),
              catchError((error) => of(failAction({error}))),
              finalize(()=>{
                this.store.dispatch(LayoutActions.hideOverlayLoading())
              })
            )
        })
      )
    }
    return createEffect(callback)
  }
}