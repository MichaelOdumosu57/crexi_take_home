import { AppState } from '@store/reducers';
import { UserProfile } from './user-profile';

export class ProfileState  {
    currentUser?: UserProfile;
    users:UserProfile[] = []
}
