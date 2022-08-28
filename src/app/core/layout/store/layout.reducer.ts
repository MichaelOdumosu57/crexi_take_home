import { LayoutState } from "@interfaces";
import { Action, createReducer, on } from '@ngrx/store';
import { LayoutActions } from ".";


const initialState:LayoutState = new LayoutState()

const reducer = createReducer(
  initialState,
  on(LayoutActions.showOverlayLoading, (state) => ({ ...state, overlayLoadingIsPresent:true })),
  on(LayoutActions.hideOverlayLoading, (state) => ({ ...state, overlayLoadingIsPresent:false })),
);


export function getLayoutReducer (state: LayoutState | undefined, action: Action) {

  return reducer(state, action);

}