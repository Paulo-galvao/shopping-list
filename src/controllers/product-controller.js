import Product from "../models/product-model.js";

async function store(req, res) {
    try {
        const content = await Product.create(req.body);
        res.json(content);
    } catch (error) {
        res.json(error.message);
        console.log(error.message);
    }
}

async function show(req, res) {
    try {
        const content = await Product.find().exec();
        res.json(content);
    } catch (error) {
        res.json(error.message);
        console.log(error.message);
    }
}

async function showById(req, res) {
    try {
        const content = await Product.findById(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.json(error.message);
        console.log(error.message);
    }
}

export default {
    store, 
    show, 
    showById
}; 