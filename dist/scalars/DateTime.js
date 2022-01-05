"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLDateTime = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("graphql");
const isISO8601_1 = (0, tslib_1.__importDefault)(
  require("validator/lib/isISO8601")
);
const validate = (value) => {
  const options = {
    strict: true,
    strictSeparator: true,
  };
  if (!(0, isISO8601_1.default)(value, options)) {
    throw new TypeError(`Invalid value. '${value} is not of type 'DateTime'`);
  }
  return value;
};
exports.GraphQLDateTime = new graphql_1.GraphQLScalarType({
  name: "DateTime",
  description: [
    "Check if the string is a valid  [Prisma DateTime](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#default-value-for-a-datetime) ([ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), strict-mode date)",
    "`options` is an object which defaults to `{ strict: true, strictSeparator: false }`",
    "  `strict===true` => date strings with invalid dates like `2009-02-29` will be invalid",
    "  `strictSeparator===true` => date strings with date and time separated by anything other than a T will be invalid",
  ].join(""),
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
exports.default = exports.GraphQLDateTime;
