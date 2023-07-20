import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import { registerAction } from "src/app/auth/store/actions/auth.actions";
import { IAppState } from "src/app/shared/types/appState.interface";
// import { IAuthState } from "src/app/auth/store/authState.interface";
import {
  authIsSubmittingSelector,
  authValidationErrorsSelector,
} from "src/app/auth/store/selects/auth.select";
import { IBackendErrors } from "src/app/shared/types/backendErrors.interface";
import { IUserRequest } from "../../types/authRequest.interface";

@Component({
  selector: "cd-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  public formRegister!: FormGroup;
  public isSubmitting$!: Observable<boolean>;
  public backendErrors$!: Observable<IBackendErrors | null>;

  constructor(
    private fb: FormBuilder,
    private store: Store<IAppState> // private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initializeFormRegister();
    this.initializeIsSubmitting();
    this.initializeValidationErrors();
  }

  // private postRegister(data: IRegisterRequest) {
  //   this.authService.fetchRegister(data).subscribe(response => console.log(response));
  // }

  private initializeIsSubmitting() {
    this.isSubmitting$ = this.store.pipe(select(authIsSubmittingSelector));
  }
  private initializeValidationErrors() {
    this.backendErrors$ = this.store.pipe(select(authValidationErrorsSelector));
  }

  private initializeFormRegister() {
    this.formRegister = this.fb.group({
      username: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

  onSignUp() {
    console.log(this.formRegister.value);
    const request: IUserRequest = {
      user: this.formRegister.value,
    };
    this.store.dispatch(registerAction({ request }));
    // this.postRegister(this.formRegister.value);
  }
}
