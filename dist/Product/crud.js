"use strict";
// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers =
  exports.deleteManyProduct =
  exports.updateManyProduct =
  exports.updateOneProduct =
  exports.deleteOneProduct =
  exports.upsertOneProduct =
  exports.createOneProduct =
  exports.findUniqueProduct =
  exports.groupByProduct =
  exports.aggregateProduct =
  exports.findManyProduct =
  exports.findFirstProduct =
    void 0;
// resolver functions
async function findFirstProduct(parent, args, context, info) {
  const { prisma } = context;
  return prisma.product.findFirst(args);
}
exports.findFirstProduct = findFirstProduct;
async function findManyProduct(parent, args, context, info) {
  const { prisma } = context;
  return prisma.product.findMany(args);
}
exports.findManyProduct = findManyProduct;
async function aggregateProduct(parent, args, context, info) {
  const { prisma } = context;
  return prisma.product.aggregate(args);
}
exports.aggregateProduct = aggregateProduct;
async function groupByProduct(parent, args, context, info) {
  const { prisma } = context;
  return prisma.product.groupBy(args);
}
exports.groupByProduct = groupByProduct;
async function findUniqueProduct(parent, args, context, info) {
  const { prisma } = context;
  return prisma.product.findUnique(args);
}
exports.findUniqueProduct = findUniqueProduct;
async function createOneProduct(parent, args, context, info) {
  const { prisma } = context;
  return prisma.product.create(args);
}
exports.createOneProduct = createOneProduct;
async function upsertOneProduct(parent, args, context, info) {
  const { prisma } = context;
  return prisma.product.upsert(args);
}
exports.upsertOneProduct = upsertOneProduct;
async function deleteOneProduct(parent, args, context, info) {
  const { prisma } = context;
  return prisma.product.delete(args);
}
exports.deleteOneProduct = deleteOneProduct;
async function updateOneProduct(parent, args, context, info) {
  const { prisma } = context;
  return prisma.product.update(args);
}
exports.updateOneProduct = updateOneProduct;
async function updateManyProduct(parent, args, context, info) {
  const { prisma } = context;
  return prisma.product.updateMany(args);
}
exports.updateManyProduct = updateManyProduct;
async function deleteManyProduct(parent, args, context, info) {
  const { prisma } = context;
  return prisma.product.deleteMany(args);
}
exports.deleteManyProduct = deleteManyProduct;
// resolver type exports
const Query = {
  findFirstProduct,
  findManyProduct,
  aggregateProduct,
  groupByProduct,
  findUniqueProduct,
};
const Mutation = {
  createOneProduct,
  upsertOneProduct,
  deleteOneProduct,
  updateOneProduct,
  updateManyProduct,
  deleteManyProduct,
};
exports.resolvers = {
  Query,
  Mutation,
};
