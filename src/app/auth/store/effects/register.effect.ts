import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { Router } from "@angular/router";

import { AuthService } from "src/app/auth/services/auth.service";
import {
  registerAction,
  registerActionFailure,
  registerActionSuccess,
} from "src/app/auth/store/actions/auth.actions";
import { IAuthResponse } from "src/app/auth/types/authResponse.interface";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { EStaticVariables } from "src/app/auth/types/staticVariable.enum";

@Injectable()
export class RegisterEffects {
  fetchRegister$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.fetchRegister(request).pipe(
          map((currentUser: IAuthResponse) => {
            console.log(currentUser);
            this.localStorage.set(EStaticVariables.ACCESS_TOKEN, currentUser.token);
            return registerActionSuccess({ currentUser });
          }),
          catchError((errors: HttpErrorResponse) => {
            console.log(errors.error.errors);

            return of(registerActionFailure({ errors: errors.error.errors }));
          })
        );
      })
    )
  );

  redirectAutoSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerActionSuccess),
        tap(() => {
          this.router.navigateByUrl("/");
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private localStorage: LocalStorageService,
    private router: Router
  ) {}
}
