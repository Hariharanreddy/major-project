/**
 * @swagger
 * /api/trpc:
 *   get:
 *     summary: Handles tRPC requests via HTTP GET method.
 *     tags:
 *       - tRPC
 *     parameters:
 *       - in: query
 *         name: endpoint
 *         required: true
 *         description: The tRPC endpoint path.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully processed tRPC request.
 *       '400':
 *         description: Bad Request.
 *     examples:
 *       example:
 *         description: Sample GET request to tRPC.
 *         summary: Sample GET request
 *         content:
 *           application/json:
 *             example:
 *               endpoint: "/exampleEndpoint"
 *       response:
 *         description: Sample response for a successful GET request to tRPC.
 *         content:
 *           application/json:
 *             example:
 *               message: "Successfully processed tRPC request."
 *
 *   post:
 *     summary: Handles tRPC requests via HTTP POST method.
 *     tags:
 *       - tRPC
 *     requestBody:
 *       description: Request body for tRPC POST request.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               endpoint:
 *                 type: string
 *                 description: The tRPC endpoint path.
 *           examples:
 *             example:
 *               description: Sample POST request to tRPC.
 *               summary: Sample POST request
 *               value:
 *                 endpoint: "/exampleEndpoint"
 *     responses:
 *       '200':
 *         description: Successfully processed tRPC request.
 *       '400':
 *         description: Bad Request.
 *     examples:
 *       example:
 *         description: Sample response for a successful POST request to tRPC.
 *         content:
 *           application/json:
 *             example:
 *               message: "Successfully processed tRPC request."
 */

import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@/trpc";

const handler = (req: Request): Promise<Response> =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ({}),
  });

export { handler as GET, handler as POST };
