import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

import { BASE_URL } from "src/app/api-config";
import { IUserRequest } from "src/app/auth/types/authRequest.interface";
import { IAuthResponse, IUserResponse } from "src/app/auth/types/authResponse.interface";
// import { ILoginRequest } from "src/app/auth/types/authRequest.interface";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private getUser(response: IUserResponse): IAuthResponse {
    return response.user;
  }

  public fetchRegister(data: IUserRequest): Observable<IAuthResponse> {
    return this.http.post<IUserResponse>(`${BASE_URL}/users`, data).pipe(map(this.getUser));
  }

  public fetchLogin(data: IUserRequest): Observable<IAuthResponse> {
    return this.http.post<IUserResponse>(`${BASE_URL}/users/login`, data).pipe(map(this.getUser));
  }
}
