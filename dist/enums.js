"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortOrder =
  exports.ProductScalarFieldEnum =
  exports.CartScalarFieldEnum =
  exports.UserScalarFieldEnum =
    void 0;
var UserScalarFieldEnum;
(function (UserScalarFieldEnum) {
  UserScalarFieldEnum["id"] = "id";
  UserScalarFieldEnum["name"] = "name";
  UserScalarFieldEnum["email"] = "email";
  UserScalarFieldEnum["password"] = "password";
  UserScalarFieldEnum["createdAt"] = "createdAt";
  UserScalarFieldEnum["updatedAt"] = "updatedAt";
})(
  (UserScalarFieldEnum =
    exports.UserScalarFieldEnum || (exports.UserScalarFieldEnum = {}))
);
var CartScalarFieldEnum;
(function (CartScalarFieldEnum) {
  CartScalarFieldEnum["id"] = "id";
  CartScalarFieldEnum["createdAt"] = "createdAt";
  CartScalarFieldEnum["updatedAt"] = "updatedAt";
  CartScalarFieldEnum["userId"] = "userId";
  CartScalarFieldEnum["coupon"] = "coupon";
})(
  (CartScalarFieldEnum =
    exports.CartScalarFieldEnum || (exports.CartScalarFieldEnum = {}))
);
var ProductScalarFieldEnum;
(function (ProductScalarFieldEnum) {
  ProductScalarFieldEnum["id"] = "id";
  ProductScalarFieldEnum["name"] = "name";
  ProductScalarFieldEnum["price"] = "price";
  ProductScalarFieldEnum["image"] = "image";
  ProductScalarFieldEnum["createdAt"] = "createdAt";
  ProductScalarFieldEnum["updatedAt"] = "updatedAt";
})(
  (ProductScalarFieldEnum =
    exports.ProductScalarFieldEnum || (exports.ProductScalarFieldEnum = {}))
);
var SortOrder;
(function (SortOrder) {
  SortOrder["asc"] = "asc";
  SortOrder["desc"] = "desc";
})((SortOrder = exports.SortOrder || (exports.SortOrder = {})));
