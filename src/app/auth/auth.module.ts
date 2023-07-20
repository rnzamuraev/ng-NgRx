import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { HomeComponent } from "src/app/auth/components/home/home.component";
import { LoginComponent } from "src/app/auth/components/login/login.component";
import { RegisterComponent } from "src/app/auth/components/register/register.component";
import { RegisterEffects } from "src/app/auth/store/effects/register.effect";
import { reducer } from "src/app/auth/store/reducers/auth.reducer";
import { SharedModule } from "src/app/shared/shared.module";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  declarations: [RegisterComponent, LoginComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forFeature("auth", reducer),
    EffectsModule.forFeature([RegisterEffects]),
    SharedModule,
  ],
  // exports: [RegisterComponent],
})
export class AuthModule {}
