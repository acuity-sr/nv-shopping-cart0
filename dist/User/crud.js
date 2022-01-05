"use strict";
// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers =
  exports.deleteManyUser =
  exports.updateManyUser =
  exports.updateOneUser =
  exports.deleteOneUser =
  exports.upsertOneUser =
  exports.createOneUser =
  exports.findUniqueUser =
  exports.groupByUser =
  exports.aggregateUser =
  exports.findManyUser =
  exports.findFirstUser =
    void 0;
// resolver functions
async function findFirstUser(parent, args, context, info) {
  const { prisma } = context;
  return prisma.user.findFirst(args);
}
exports.findFirstUser = findFirstUser;
async function findManyUser(parent, args, context, info) {
  const { prisma } = context;
  return prisma.user.findMany(args);
}
exports.findManyUser = findManyUser;
async function aggregateUser(parent, args, context, info) {
  const { prisma } = context;
  return prisma.user.aggregate(args);
}
exports.aggregateUser = aggregateUser;
async function groupByUser(parent, args, context, info) {
  const { prisma } = context;
  return prisma.user.groupBy(args);
}
exports.groupByUser = groupByUser;
async function findUniqueUser(parent, args, context, info) {
  const { prisma } = context;
  return prisma.user.findUnique(args);
}
exports.findUniqueUser = findUniqueUser;
async function createOneUser(parent, args, context, info) {
  const { prisma } = context;
  return prisma.user.create(args);
}
exports.createOneUser = createOneUser;
async function upsertOneUser(parent, args, context, info) {
  const { prisma } = context;
  return prisma.user.upsert(args);
}
exports.upsertOneUser = upsertOneUser;
async function deleteOneUser(parent, args, context, info) {
  const { prisma } = context;
  return prisma.user.delete(args);
}
exports.deleteOneUser = deleteOneUser;
async function updateOneUser(parent, args, context, info) {
  const { prisma } = context;
  return prisma.user.update(args);
}
exports.updateOneUser = updateOneUser;
async function updateManyUser(parent, args, context, info) {
  const { prisma } = context;
  return prisma.user.updateMany(args);
}
exports.updateManyUser = updateManyUser;
async function deleteManyUser(parent, args, context, info) {
  const { prisma } = context;
  return prisma.user.deleteMany(args);
}
exports.deleteManyUser = deleteManyUser;
// resolver type exports
const Query = {
  findFirstUser,
  findManyUser,
  aggregateUser,
  groupByUser,
  findUniqueUser,
};
const Mutation = {
  createOneUser,
  upsertOneUser,
  deleteOneUser,
  updateOneUser,
  updateManyUser,
  deleteManyUser,
};
exports.resolvers = {
  Query,
  Mutation,
};
