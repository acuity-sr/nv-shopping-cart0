"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scalarResolvers = void 0;
const Email_1 = require("./Email");
const DateTime_1 = require("./DateTime");
const Json_1 = require("./Json");
exports.scalarResolvers = {
  Email: Email_1.GraphQLEmail,
  DateTime: DateTime_1.GraphQLDateTime,
  Json: Json_1.GraphQLJson,
};
