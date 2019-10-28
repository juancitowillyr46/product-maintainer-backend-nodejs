import mongoose from "mongoose";

const Product = new mongoose.Schema(
    {
        id: Number,
        name: String,
        description: String,
        image: String,
        state: Boolean,
        price: Number
    }
);