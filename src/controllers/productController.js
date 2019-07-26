const Product = require('../models/products');
const productController = {};

productController.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(400).json({
            error: err
        })
    }
};

productController.createProduct = async (req, res) => {
    try {
        const { product } = req.body;
        const newProduct = new Product({ product });
        await newProduct.save();
        res.json({
            message: 'product saved'
        })
    } catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

productController.getProduct = async (req, res) => {
    try{
        const { id } = req.params;
        const product = await Product.findById(id);
        res.json(product);
    } catch (err){
        res.status(400).json({
            error: err
        });
    }
}

productController.updateProduct = async (req, res) => {
    try {
        const { id, description} = req.params;
        await Product.findByIdAndUpdate(id, {
            description
        });
        res.json('product updated');
    } catch (err) {
        res.status(400).json({
            error: err
        });
    }
}

productController.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);
        res.json({
            message: 'product deleted'
        })
    } catch (err) {
        res.status(400).json({
            error: err
        })
    }
};

module.exports = productController;