import { RedirectStore } from "../domain"

class InMemoryRedirectStore implements RedirectStore {
  set: RedirectStore["set"] = () => {
    throw new Error("not implemented yet")
  }

  getForPath: RedirectStore["getForPath"] = () => {
    throw new Error("not implemented yet")
  }
}

const make = () => new InMemoryRedirectStore()
export { make as InMemoryRedirectStore }
