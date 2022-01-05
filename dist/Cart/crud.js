"use strict";
// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers =
  exports.deleteManyCart =
  exports.updateManyCart =
  exports.updateOneCart =
  exports.deleteOneCart =
  exports.upsertOneCart =
  exports.createOneCart =
  exports.findUniqueCart =
  exports.groupByCart =
  exports.aggregateCart =
  exports.findManyCart =
  exports.findFirstCart =
    void 0;
// resolver functions
async function findFirstCart(parent, args, context, info) {
  const { prisma } = context;
  return prisma.cart.findFirst(args);
}
exports.findFirstCart = findFirstCart;
async function findManyCart(parent, args, context, info) {
  const { prisma } = context;
  return prisma.cart.findMany(args);
}
exports.findManyCart = findManyCart;
async function aggregateCart(parent, args, context, info) {
  const { prisma } = context;
  return prisma.cart.aggregate(args);
}
exports.aggregateCart = aggregateCart;
async function groupByCart(parent, args, context, info) {
  const { prisma } = context;
  return prisma.cart.groupBy(args);
}
exports.groupByCart = groupByCart;
async function findUniqueCart(parent, args, context, info) {
  const { prisma } = context;
  return prisma.cart.findUnique(args);
}
exports.findUniqueCart = findUniqueCart;
async function createOneCart(parent, args, context, info) {
  const { prisma } = context;
  return prisma.cart.create(args);
}
exports.createOneCart = createOneCart;
async function upsertOneCart(parent, args, context, info) {
  const { prisma } = context;
  return prisma.cart.upsert(args);
}
exports.upsertOneCart = upsertOneCart;
async function deleteOneCart(parent, args, context, info) {
  const { prisma } = context;
  return prisma.cart.delete(args);
}
exports.deleteOneCart = deleteOneCart;
async function updateOneCart(parent, args, context, info) {
  const { prisma } = context;
  return prisma.cart.update(args);
}
exports.updateOneCart = updateOneCart;
async function updateManyCart(parent, args, context, info) {
  const { prisma } = context;
  return prisma.cart.updateMany(args);
}
exports.updateManyCart = updateManyCart;
async function deleteManyCart(parent, args, context, info) {
  const { prisma } = context;
  return prisma.cart.deleteMany(args);
}
exports.deleteManyCart = deleteManyCart;
// resolver type exports
const Query = {
  findFirstCart,
  findManyCart,
  aggregateCart,
  groupByCart,
  findUniqueCart,
};
const Mutation = {
  createOneCart,
  upsertOneCart,
  deleteOneCart,
  updateOneCart,
  updateManyCart,
  deleteManyCart,
};
exports.resolvers = {
  Query,
  Mutation,
};
