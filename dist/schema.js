"use strict";
// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const schema_1 = require("@graphql-tools/schema");
const graphql_1 = require("graphql");
const fs = (0, tslib_1.__importStar)(require("fs"));
const CartCrud = (0, tslib_1.__importStar)(require("./Cart/crud"));
const CartTypes = (0, tslib_1.__importStar)(require("./Cart/types"));
const ProductCrud = (0, tslib_1.__importStar)(require("./Product/crud"));
const ProductTypes = (0, tslib_1.__importStar)(require("./Product/types"));
const UserCrud = (0, tslib_1.__importStar)(require("./User/crud"));
const UserTypes = (0, tslib_1.__importStar)(require("./User/types"));
const coreResolvers = (0, tslib_1.__importStar)(require("./core/resolvers"));
const coreTypes = (0, tslib_1.__importStar)(require("./core/types"));
const scalars_1 = require("./scalars");
const loadTypeDef = (file) => fs.readFileSync(file, "utf8");
function getSchema(srcRoot = __dirname) {
  const schema = (0, schema_1.makeExecutableSchema)({
    typeDefs: [
      loadTypeDef(`${__dirname}/enums.sdl`),
      loadTypeDef(`${__dirname}/scalars.sdl`),
      loadTypeDef(`${__dirname}/Cart/crud.sdl`),
      loadTypeDef(`${__dirname}/Cart/types.sdl`),
      loadTypeDef(`${__dirname}/Product/crud.sdl`),
      loadTypeDef(`${__dirname}/Product/types.sdl`),
      loadTypeDef(`${__dirname}/User/crud.sdl`),
      loadTypeDef(`${__dirname}/User/types.sdl`),
      loadTypeDef(`${__dirname}/core/resolvers.sdl`),
      loadTypeDef(`${__dirname}/core/types.sdl`),
    ],
    resolvers: {
      ...scalars_1.scalarResolvers,
      Query: {
        ...CartCrud.resolvers?.Query,
        ...CartTypes.resolvers?.Query,
        ...ProductCrud.resolvers?.Query,
        ...ProductTypes.resolvers?.Query,
        ...UserCrud.resolvers?.Query,
        ...UserTypes.resolvers?.Query,
        ...coreResolvers.resolvers?.Query,
        ...coreTypes.resolvers?.Query,
      },
      Mutation: {
        ...CartCrud.resolvers?.Mutation,
        ...CartTypes.resolvers?.Mutation,
        ...ProductCrud.resolvers?.Mutation,
        ...ProductTypes.resolvers?.Mutation,
        ...UserCrud.resolvers?.Mutation,
        ...UserTypes.resolvers?.Mutation,
        ...coreResolvers.resolvers?.Mutation,
        ...coreTypes.resolvers?.Mutation,
      },
    },
  });
  (0, graphql_1.assertValidSchema)(schema);
  return schema;
}
exports.default = getSchema;
