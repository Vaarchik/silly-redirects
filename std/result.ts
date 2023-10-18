export type Failure<C> = {
  _tag: "Failure"
  cause: C
}

export type Success<T> = {
  _tag: "Success"
  value: T
}

export type Result<C, T> = Failure<C> | Success<T>

export const Failure = <T>(cause: T): Failure<T> => {
  throw new Error("not implemented")
}

export const Success = <T>(value: T): Success<T> => {
  throw new Error("not implemented")
}

export const match =
  <C, T, D, R>(options: {
    onFailure: (cause: C) => D
    onSuccess: (value: T) => R
  }) =>
  (result: Result<C, T>): D | R => {
    throw new Error("not implemented")
  }
