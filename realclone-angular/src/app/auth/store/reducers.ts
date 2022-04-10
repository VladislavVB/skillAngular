import { Action, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../types/authState.interface';
import { registerAction } from './actions/register.actions';

const initialState: AuthStateInterface = {
  isSubmitting: false,
};

const authReduser = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  )
);

export function reducer(state: AuthStateInterface, action: Action) {
  return authReduser(state, action)
}