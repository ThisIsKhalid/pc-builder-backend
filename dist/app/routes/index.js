"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const product_route_1 = require("../modules/products/product.route");
const categories_route_1 = require("../modules/categories/categories.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/users',
        route: user_route_1.UserRoute,
    },
    {
        path: '/products',
        route: product_route_1.ProductRoute,
    },
    {
        path: '/categories',
        route: categories_route_1.CategoriesRouter,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
