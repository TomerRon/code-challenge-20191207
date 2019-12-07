export type IResponse<T> = ISuccessResponse<T> | IErrorResponse

export interface ISuccessResponse<T> {
  readonly status: 200
  readonly body: T
}

export interface IErrorResponse {
  readonly status: 400
  readonly error: string
}

export interface IUserResponse {
  readonly name: string
  readonly id: string
}
