"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoute = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post('/create-product', product_controller_1.ProductsController.createProduct);
router.delete('/:id', product_controller_1.ProductsController.deleteProduct);
router.get('/:id', product_controller_1.ProductsController.singleProduct);
router.get('/', product_controller_1.ProductsController.getProducts);
exports.ProductRoute = router;
