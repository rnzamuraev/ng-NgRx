import { HttpClientModule } from "@angular/common/http";
import { NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { CommonModule } from "@angular/common";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AuthModule } from "src/app/auth/auth.module";
import { BASE_URL, BASE_URL_TOKEN } from "./api-config";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    AuthModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    { provide: BASE_URL, useValue: BASE_URL_TOKEN, multi: true },
    // { provide: BASE_URL, useValue: BASE_URL_TOKEN, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
