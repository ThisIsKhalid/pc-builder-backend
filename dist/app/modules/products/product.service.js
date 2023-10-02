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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const product_model_1 = require("./product.model");
const product_constants_1 = require("./product.constants");
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const createProduct = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Products.create(productData);
    return result;
});
const getProducts = (filters, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = filters, filterData = __rest(filters, ["searchTerm"]);
    const { limit, skip, sortBy, sortOrder, page } = paginationHelper_1.paginationHelpers.calculatePagination(paginationOptions);
    const andCondition = [];
    if (searchTerm) {
        andCondition.push({
            $or: product_constants_1.productSearchableFields.map(field => ({
                [field]: {
                    $regex: searchTerm,
                    $options: 'i',
                },
            })),
        });
    }
    if (Object.keys(filterData).length) {
        andCondition.push({
            $and: Object.entries(filterData).map(([field, value]) => ({
                [field]: value,
            })),
        });
    }
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    const whereCondition = andCondition.length > 0 ? { $and: andCondition } : {};
    const result = yield product_model_1.Products.find(whereCondition)
        .sort(sortConditions)
        .skip(skip);
    const total = yield product_model_1.Products.countDocuments(whereCondition);
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const singleProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Products.findById(id);
    return result;
});
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Products.findByIdAndDelete(id);
    return result;
});
// const editBook = async (
//   id: string,
//   editData: IBook,
//   user: JwtPayload | null
// ): Promise<IBook | null> => {
//   const isBookExist = await Books.findOne({ _id: id });
//   if (!isBookExist) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Book Not Found');
//   }
//   if (isBookExist.userEmail !== user?.userEmail) {
//     throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
//   }
//   const result = await Books.findByIdAndUpdate({ _id: id }, editData, {
//     new: true,
//   });
//   return result;
// };
// const deleteBook = async (
//   id: string,
//   user: JwtPayload | null
// ): Promise<IBook | null> => {
//   const isBookExist = await Books.findOne({ _id: id });
//   if (!isBookExist) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Book Not Found');
//   }
//   if (isBookExist.userEmail !== user?.userEmail) {
//     throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
//   }
//   const result = await Books.findByIdAndDelete(id);
//   return result;
// };
// const getReview = async (id: string) => {
//   const result = await Books.findOne({ _id: id }, { _id: 0, reviews: 1 });
//   return result;
// };
// const addReview = async (id: string, review: IReview) => {
//   const result = await Books.findOneAndUpdate(
//     { _id: id },
//     { $push: { reviews: review } }
//   );
//   return result;
// };
exports.ProductsService = {
    createProduct,
    getProducts,
    singleProduct,
    deleteProduct,
};
