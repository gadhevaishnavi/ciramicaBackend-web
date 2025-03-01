import productModel from "../models/productModel.js"; // Adjust the path as per your folder structure

// Create a new product
export const createProduct = async (productData) => {
    try {
        const newProduct = new productModel(productData);
        return await newProduct.save();
    } catch (error) {
        throw new Error(`Error creating product: ${error.message}`);
    }
};

// Get all products
export const getAllProducts = async () => {
    try {
        return await productModel.find();
    } catch (error) {
        throw new Error(`Error fetching products: ${error.message}`);
    }
};

// Get a single product by ID
export const getProductById = async (productId) => {
    try {
        return await productModel.findById(productId);
    } catch (error) {
        throw new Error(`Product not found: ${error.message}`);
    }
};

// Update a product by ID
export const updateProduct = async (productId, updateData) => {
    try {
        return await productModel.findByIdAndUpdate(productId, updateData, { new: true });
    } catch (error) {
        throw new Error(`Error updating product: ${error.message}`);
    }
};

// Delete a product by ID
export const deleteProduct = async (productId) => {
    try {
        return await productModel.findByIdAndDelete(productId);
    } catch (error) {
        throw new Error(`Error deleting product: ${error.message}`);
    }
};
