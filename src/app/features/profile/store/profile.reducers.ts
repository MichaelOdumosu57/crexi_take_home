import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { ProfileActions } from './index';


const initialState: ProfileState = new ProfileState();

const reducer = createReducer(
  initialState,
  on(ProfileActions.getRandomProfileSuccess, (state, action) => ({ ...state, currentUser: action.result })),
  on(ProfileActions.listRandomProfileSuccess, (state, action) => ({ ...state, users: action.result })),
  on(ProfileActions.updateCurrentUserId, (state, action) => {
    
    return ({ ...state, currentUserId: action.id })
  }
  )
);

export function getProfileReducer(state: ProfileState | undefined, action: Action) {

  return reducer(state, action);

}
