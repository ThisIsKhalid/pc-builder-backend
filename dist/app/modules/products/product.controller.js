"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const product_service_1 = require("./product.service");
const pick_1 = __importDefault(require("../../../shared/pick"));
const product_constants_1 = require("./product.constants");
const createProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = req.body;
    const user = req.user;
    productData.userEmail = user === null || user === void 0 ? void 0 : user.userEmail;
    const result = yield product_service_1.ProductsService.createProduct(productData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Product created successfully!',
        data: result,
    });
}));
const singleProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield product_service_1.ProductsService.singleProduct(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Product retrieved successfully!',
        data: result,
    });
}));
const deleteProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield product_service_1.ProductsService.deleteProduct(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Delete  successfully!',
        data: result,
    });
}));
const getProducts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, product_constants_1.productFilterableFields);
    const paginationOption = (0, pick_1.default)(req.query, [
        'page',
        'limit',
        'sortBy',
        'sortOrder',
    ]);
    const result = yield product_service_1.ProductsService.getProducts(filters, paginationOption);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Products retrieved successfully!',
        data: result,
    });
}));
// const editBook = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { ...editData } = req.body;
//   const user = req.user;
//   const result = await ProductsService.editBook(id, editData, user);
//   sendResponse<IBook>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Books edit successfully!',
//     data: result,
//   });
// });
// const getReview = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const result = await ProductsService.getReview(id);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Review retrieved successfully!',
//     data: result,
//   });
// });
// const deleteBook = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const user = req.user;
//   const result = await ProductsService.deleteBook(id, user);
//   sendResponse<IBook>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Books delete successfully!',
//     data: result,
//   });
// });
// const addReview = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { review } = req.body;
//   const result = await ProductsService.addReview(id, review);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'review added  successfully!',
//     data: result,
//   });
// });
exports.ProductsController = {
    createProduct,
    singleProduct,
    getProducts,
    deleteProduct,
};
