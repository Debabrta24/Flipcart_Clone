import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
        unique: true
    },
    url: { type: String },
    detailUrl: { type: String },
    title: { type: String },
    price: { type: Object },
    quantity: { type: Number },
    description: { type: String },
    discount: { type: String },
    tagline: { type: String },
})

const Product = mongoose.model("prodict", ProductSchema);
export default Product