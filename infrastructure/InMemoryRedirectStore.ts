import {Redirect, RedirectNotConfigured, RedirectStore} from "../domain"
import {Failure, Result, Success, Tag} from "../std/result.ts";
import {Task} from "../std/task.ts";

class InMemoryRedirectStore implements RedirectStore {
  map = new Map<string, Redirect>();

  set: RedirectStore["set"] = (value: Redirect) => {
    return () => {
      this.map.set(value.host, value);
      return Promise.resolve(Success(void 0))
    };
  }

  getForPath: RedirectStore["getForPath"] = (path ) => {
    return () => {
      const exist = this.map.get(path);
      return Promise.resolve(exist ? Success(exist) : Failure(RedirectNotConfigured.makeForPath(path)));
    };
  }
}

const make = () => new InMemoryRedirectStore()
export { make as InMemoryRedirectStore }
