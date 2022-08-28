import { ProfileState } from '@interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getProfileState = createFeatureSelector<ProfileState>('profile');

export const getUserProfile = createSelector(getProfileState, ({ currentUser: user }) => user);
export const listUserProfiles = createSelector(getProfileState, ({ users }) => users);
