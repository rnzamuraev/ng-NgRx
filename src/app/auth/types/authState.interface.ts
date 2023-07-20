import { IBackendErrors } from "src/app/shared/types/backendErrors.interface";
import { IAuthResponse } from "./authResponse.interface";

export interface IAuthState {
  isSubmitting: boolean;
  currentUser: IAuthResponse | null;
  isLoggedIn: boolean | null;
  validationErrors: IBackendErrors | null;
}
