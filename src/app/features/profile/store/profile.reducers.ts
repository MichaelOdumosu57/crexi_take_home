import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { ProfileActions } from './index';
import { UserProfile } from '../interfaces';


const initialState: ProfileState = new ProfileState();

const reducer = createReducer(
    initialState,
    on(ProfileActions.getRandomProfileSuccess,(state,action)=> ({...state,currentUser:action.result})),
    on(ProfileActions.listRandomProfileSuccess,(state,action)=> ({...state,users:action.result}))
);

export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
