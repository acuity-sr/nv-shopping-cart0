"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLJson = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("graphql");
const isJSON_1 = (0, tslib_1.__importDefault)(require("validator/lib/isJSON"));
const validate = (value) => {
  if (!(0, isJSON_1.default)(value)) {
    throw new TypeError(`Invalid value. '${value} is not of type 'Json'`);
  }
  return value;
};
exports.GraphQLJson = new graphql_1.GraphQLScalarType({
  name: "Json",
  description: "Check if the string is valid JSON (note: uses JSON.parse)",
  serialize(value) {
    return validate(value);
  },
  parseValue(value) {
    return validate(value);
  },
  parseLiteral(ast) {
    if (ast.kind !== graphql_1.Kind.STRING) {
      throw new graphql_1.GraphQLError(
        `Can only validate strings as RGBA colors but got '${ast.kind}'`
      );
    }
    return validate(ast.value);
  },
  extensions: {
    codegenScalarType: "string",
  },
});
exports.default = exports.GraphQLJson;
