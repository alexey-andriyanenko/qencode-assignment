import { TSuccessResponse } from "src/shared-module/api";

export interface ILoginRequest {
  email: string;
  password: string;
}

export type TLoginSuccessResponse = TSuccessResponse<{
  access_token: string;
  refresh_token: string;
  token_expire: number;
  refresh_token_expire: number;
}>;

export interface IPasswordResetRequest {
  email: string;
  redirect_url: string;
}

export interface IPasswordSetRequest {
  token: string;
  secret: string;
  password: string;
  password_confirm: string;
}
