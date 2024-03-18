import { makeAutoObservable, runInAction } from "mobx";

import { httpClient } from "src/shared-module/api";
import { authApiService, ILoginRequest } from "../api";

class AuthStore {
  private _isLogged = !!localStorage.getItem("token");
  private _token: string | null = localStorage.getItem("token");

  constructor() {
    makeAutoObservable(this);
  }

  public get isLogged() {
    return this._isLogged;
  }

  public get token() {
    return this._token;
  }

  async login(data: ILoginRequest): Promise<void> {
    const result = await authApiService.login(data);

    runInAction(() => {
      localStorage.setItem("token", result.access_token);
      httpClient.defaults.headers.common.Authorization = `Bearer ${result.access_token}`;

      this._isLogged = true;
      this._token = result.access_token;
    });
  }

  private _clear() {
    this._isLogged = false;
    this._token = null;
    localStorage.removeItem("token");
  }
}

export const authStore = new AuthStore();
