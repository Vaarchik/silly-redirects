import {InMemoryRedirectStore} from "./infrastructure/InMemoryRedirectStore.ts";
import {match} from "./std/result.ts";
import {pipe} from "@std";

const myStore = new InMemoryRedirectStore();

await myStore.set({
  host: 'missing.domain.tld',
  destination: 'https://seekdharma.com'
})();

const server = Bun.serve({
  port: 5000,
  async fetch(req) {
    const { host } = new URL(req.url);

    const exist = await myStore.getForPath(host)();
    return pipe(exist, match({
      onSuccess: (value) => Response.redirect(value.redirect),
      onFailure: (cause) => Response.error()
    }));
  },
})

console.log(`Listening on http://localhost:${server.port} ...`)
