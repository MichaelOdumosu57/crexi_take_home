import { UserProfile } from '@interfaces';
import { createAction ,props} from '@ngrx/store';


// getRandomProfile Endpoint
export const loadingGetRandomProfile = createAction('[Profile] Loading Get Random Profile')
export const getRandomProfileSuccess = createAction(
  '[Profile] Get Profile Success',
  props<{ result: UserProfile }>()
)
export const getRandomProfileFail = createAction(
  '[Profile] Get Profile Fail',
  props<{ error: string }>()
)



