export enum Tag {
  SUCCESS = 'Success',
  FAILURE = 'Failure'
}

export type Failure<C, T> = {
  _tag: Tag.FAILURE
  cause: C
}

export type Success<C, T> = {
  _tag: Tag.SUCCESS,
  value: T
}

export type Result<C, T> = Failure<C, T> | Success<C, T>

export const Failure = <T>(cause: T): Failure<T, never> => {
  return {
    _tag: Tag.FAILURE,
    cause
  }
}

export const Success = <T>(value: T): Success<never, T> => {
  return {
    _tag: Tag.SUCCESS,
    value
  }
}

export const isSuccess = <C, T>(result: Result<C, T>): boolean => {
  return result._tag === Tag.SUCCESS;
}

export const match =
    <C, T, D, R>(options: {
      onFailure: (cause: C) => D
      onSuccess: (value: T) => R
    }) =>
        (result: Result<C, T>): D | R => {
          return isSuccess(result)
              ? options.onSuccess(result)
              : options.onFailure(result);
        }
