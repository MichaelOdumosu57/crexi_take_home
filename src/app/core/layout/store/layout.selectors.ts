import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LayoutState } from "@interfaces";


export const getLayoutState = createFeatureSelector<LayoutState>('layout')
export const getOverlayLoadingIsPresent = createSelector(
  getLayoutState,
  (layout) =>layout.overlayLoadingIsPresent
)