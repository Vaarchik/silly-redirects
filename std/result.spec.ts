import { describe, expect, it } from "bun:test"
import {Failure, Success, isSuccess, match} from "./result"
import assert from "assert"

describe("Success", () => {
  const success = Success("something")

  it("is a success", () => {
    expect(isSuccess(success)).toBe(true)
  })

  it("holds the expected value", () => {
    assert(isSuccess(success), "success was NOT a success")
    expect(success.value).toBe("something")
  })
})

describe("Failure", () => {
  const failure = Failure(5)

  it("is not a success", () => {
    expect(isSuccess(failure)).toBe(false)
  })

  it("holds the expected cause", () => {
    assert(!isSuccess(failure), "failure WAS a success")
    expect(failure.cause).toBe(5)
  })
})

describe('Match Success', () => {
  const success = Success("something");
  const failure = Failure(5);

  const matchRes = match({
    onFailure: (cause) => 'failure',
    onSuccess: (value) => 'success'
  });

  it("is a success", () => {
    expect(matchRes(success)).toBe('success');
  })

  it("is a failure", () => {
    expect(matchRes(failure)).toBe('failure');
  })
})
