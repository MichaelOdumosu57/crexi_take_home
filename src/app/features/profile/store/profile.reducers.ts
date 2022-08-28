import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { ProfileActions } from './index';
import { UserProfile } from '../interfaces';

const dummyProfile = new UserProfile({
    cellNumber: '888-888-8888',
    city: 'Los Angeles',
    dateOfBirth: 'Jan 1st, 1966',
    email: 'test@crexi.com',
    firstName: 'First Name',
    lastName: 'Last Name',
    phoneNumber: '999-999-9999',
    picture: '/content/img/default_user.png',
    state: 'CA'
});

const initialState: ProfileState = {};

const reducer = createReducer(
    initialState,
    on(ProfileActions.initProfile, (state) => ({ ...state, user: dummyProfile })),
    on(ProfileActions.getRandomProfileSuccess,(state,action)=> ({...state,user:action.result}))
);

export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
