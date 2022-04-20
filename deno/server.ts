import {serve} from "https://deno.land/std@0.50.0/http/server.ts";

// serve((req) => new Response("Hello World\n"), { port: 8000 });

const port = 8000
//deno allows top level await
//infinite async iterator
for await (const req of serve( { port } )) {
    console.log('incoming rquests')
    req.respond({body: 'message hello world from deno'})
}

// const handler = (req: Request): Response => {
//   const body = `Your user-agent is:\n\n${
//     req.headers.get("user-agent") ?? "Unknown"
//   }`;
//
//   return new Response(body, { status: 200 });
// };
// const port = 8000;
// await serve(handler, { port });
