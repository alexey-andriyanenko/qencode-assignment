import { makeAutoObservable, runInAction } from "mobx";

import { authApiService, ILoginRequest } from "../api";

class AuthStore {
  private _isLogged: boolean | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  public get isLogged() {
    return this._isLogged;
  }

  async login(data: ILoginRequest): Promise<void> {
    await authApiService.login(data);

    runInAction(() => {
      this._isLogged = true;
    });
  }

  private _clear() {
    this._isLogged = false;
  }
}

export const authStore = new AuthStore();
