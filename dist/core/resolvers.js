"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.queryRaw = exports.executeRaw = void 0;
// resolver functions
async function executeRaw(parent, args, context, info) {
  const { prisma } = context;
  return prisma.$executeRaw(args);
}
exports.executeRaw = executeRaw;
async function queryRaw(parent, args, context, info) {
  const { prisma } = context;
  return prisma.$queryRaw(args);
}
exports.queryRaw = queryRaw;
// resolver type exports
const Mutation = {
  executeRaw,
  queryRaw,
};
exports.resolvers = {
  Mutation,
};
