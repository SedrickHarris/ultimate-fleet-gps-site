import { handleRequest } from "./handler.ts";
import type { Env } from "./types.ts";

const worker = {
  fetch(request: Request, env: Env): Promise<Response> {
    return handleRequest(request, env);
  },
};

export default worker;
