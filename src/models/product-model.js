import conn from "../config/conn.js";

const Schema = conn.Schema;

const productSchema = new Schema({
    product_name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    expiration_date: {
        type: Date,
        required: true
    }
});

const Product = conn.model("Product", productSchema);

export default Product;