export interface IApiError {
  type: ApiErrorTypeEnum;
  message: string | null;
  errors: Record<string, string[]> | null;
}

export enum ApiErrorTypeEnum {}
