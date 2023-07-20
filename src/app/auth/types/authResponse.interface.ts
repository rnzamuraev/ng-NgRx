export interface IUserResponse {
  user: IAuthResponse;
}

export interface IAuthResponse {
  bio: null;
  email: string;
  image: string;
  token: string;
  username: string;
}
