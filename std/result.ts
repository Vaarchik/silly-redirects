export type Failure<C, T> = {
  _tag: "Failure"
  cause: C
}

export type Success<C, T> = {
  _tag: "Success"
  value: T
}

export type Result<C, T> = Failure<C, T> | Success<C, T>

export const Failure = <T>(cause: T): Failure<T, never> => {
  throw new Error("not implemented")
}

export const Success = <T>(value: T): Success<never, T> => {
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
