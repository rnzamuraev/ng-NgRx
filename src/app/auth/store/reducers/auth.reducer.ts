import { Action, createReducer, on } from "@ngrx/store";
import { IAuthState } from "../../types/authState.interface";
import {
  registerAction,
  registerActionFailure,
  registerActionSuccess,
} from "../actions/auth.actions";

const initialState: IAuthState = {
  isSubmitting: false,
  isLoggedIn: null,
  currentUser: null,
  validationErrors: null,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state: IAuthState): IAuthState => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    registerActionSuccess,
    (state: IAuthState, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    registerActionFailure,
    (state: IAuthState, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

export function reducer(state: IAuthState, action: Action) {
  return authReducer(state, action);
}
