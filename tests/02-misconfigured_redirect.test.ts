import { beforeAll, expect, it } from "bun:test"

let response: Response

beforeAll(async () => {
  response = await fetch("http://localhost:5000", {
    headers: {
      host: "missing.domain.tld",
    },
    redirect: "manual",
  })
})

it("returns a 404", () => {
  expect(response.status).toBe(404)
})
