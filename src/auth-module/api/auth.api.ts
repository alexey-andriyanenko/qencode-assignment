import { httpClient } from "src/shared-module/api";

import {
  ILoginRequest,
  IPasswordResetRequest,
  IPasswordSetRequest,
  TLoginSuccessResponse,
} from "./auth.types";

class AuthApiService {
  login(data: ILoginRequest) {
    return httpClient.post<ILoginRequest, TLoginSuccessResponse>("/v1/auth/login", data);
  }

  passwordReset(data: IPasswordResetRequest) {
    return httpClient.post<IPasswordResetRequest, void>("/v1/auth/password-reset", data);
  }

  passwordSet(data: IPasswordSetRequest) {
    return httpClient.post<IPasswordResetRequest, void>("/v1/auth/password-set", data);
  }
}

export const authApiService = new AuthApiService();
