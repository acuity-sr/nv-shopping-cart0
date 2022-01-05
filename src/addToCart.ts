import { Cart } from "./Cart/types";
import { Context, Resolvers } from "./utils";

// input types

export type AddToCart = {
  userId?: String;
  itemId?: String;
};

// resolver functions

export async function addToCart(
  parent: any,
  args: any,
  context: Context,
  info: any
): Promise<Cart> {
  const { prisma } = context;
  // TODO: Implement resolver 'addToCart'
  return undefined as unknown as Cart;
}

// resolver type exports

const Mutation = {
  addToCart,
};

export const resolvers: Resolvers = {
  Mutation,
};
