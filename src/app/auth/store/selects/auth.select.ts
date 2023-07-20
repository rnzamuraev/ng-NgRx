import { createSelector } from "@ngrx/store";
import { IAuthState } from "src/app/auth/types/authState.interface";
import { IAppState } from "src/app/shared/types/appState.interface";

const authSelector = (state: IAppState) => state.auth;

export const authIsSubmittingSelector = createSelector(
  authSelector,
  (state: IAuthState) => state.isSubmitting
);

export const authValidationErrorsSelector = createSelector(
  authSelector,
  (state: IAuthState) => state.validationErrors
);
