"use strict";
//
// Modify to suit Application needs.
//
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const plugins_1 = require("@paljs/plugins");
const client_1 = require("@prisma/client");
const apollo_server_micro_1 = require("apollo-server-micro");
const graphql_middleware_1 = require("graphql-middleware");
const micro_1 = require("micro");
const micro_cors_1 = (0, tslib_1.__importDefault)(require("micro-cors"));
const schema_1 = (0, tslib_1.__importDefault)(require("./schema"));
const schema = (0, schema_1.default)(__dirname);
const middleware = async (resolve, root, args, context, info) => {
  const result = new plugins_1.PrismaSelect(info).value;
  if (!result.select || Object.keys(result.select).length > 0) {
    args = {
      ...args,
      ...result,
    };
  }
  return resolve(root, args, context, info);
};
const context = {
  prisma: new client_1.PrismaClient(),
};
const server = new apollo_server_micro_1.ApolloServer({
  context,
  schema: (0, graphql_middleware_1.applyMiddleware)(schema, middleware),
});
exports.default = server.start().then(() => {
  const handler = server.createHandler();
  return (0, micro_cors_1.default)()((req, res) =>
    req.method === "OPTIONS"
      ? (0, micro_1.send)(res, 200, "ok")
      : handler(req, res)
  );
});
