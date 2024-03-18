export type TSuccessResponse<T> = T & {
  error: number;
  detail: Array<any> | string | number;
  timestamp: number;
};

export type TErrorResponse = {
  detail:
    | Array<{
        loc: Array<string>;
        msg: string;
        type: string;
      }>
    | string;
};
