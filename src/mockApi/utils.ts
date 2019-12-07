import { IResponse, ISuccessResponse } from './types'

export function isSuccessResponse<T>(
  response: IResponse<T>
): response is ISuccessResponse<T> {
  return response.status === 200
}
