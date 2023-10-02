"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
    individualRating: {
        type: Number,
        required: true,
    },
    averageRating: {
        type: Number,
        required: true,
    },
    keyFeatures: [
        {
            type: String,
        },
    ],
    reviews: [
        {
            type: String,
        },
    ],
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Products = (0, mongoose_1.model)('Products', productSchema);
