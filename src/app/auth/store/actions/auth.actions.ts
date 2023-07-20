import { createAction, props } from "@ngrx/store";

import { EActionType } from "src/app/auth/store/actionTypes";
import { ILoginRequest, IUserRequest } from "src/app/auth/types/authRequest.interface";
import { IAuthResponse } from "src/app/auth/types/authResponse.interface";
import { IBackendErrors } from "src/app/shared/types/backendErrors.interface";

export const registerAction = createAction(
  EActionType.REGISTER,
  props<{ request: IUserRequest }>()
);
export const registerActionSuccess = createAction(
  EActionType.REGISTER_SUCCESS,
  props<{ currentUser: IAuthResponse }>()
);
export const registerActionFailure = createAction(
  EActionType.REGISTER_FAILURE,
  props<{ errors: IBackendErrors }>()
);

export const loginAction = createAction(EActionType.LOGIN, props<{ request: ILoginRequest }>());
export const loginActionSuccess = createAction(
  EActionType.LOGIN_SUCCESS,
  props<{ currentUser: IAuthResponse }>()
);
export const loginActionFailure = createAction(
  EActionType.LOGIN_FAILURE,
  props<{ errors: IBackendErrors }>()
);
