import productModel from "../models/productModel.js";

// Get all products
export const getAllProducts = async () => {
    try {
        return await productModel.find();
    } catch (error) {
        throw new Error(`Error fetching products: ${error.message}`);
    }
};

// Get product by ID
export const getProductById = async (id) => {
    try {
        const product = await productModel.findById(id);
        if (!product) {
            throw new Error("Product not found");
        }
        return product;
    } catch (error) {
        throw new Error(`Error fetching product: ${error.message}`);
    }
};

// Create a new product
export const createProduct = async (productData) => {
    try {
        const newProduct = new productModel(productData);
        return await newProduct.save();
    } catch (error) {
        throw new Error(`Error creating product: ${error.message}`);
    }
};

// Update a product by ID
export const updateProduct = async (id, updatedData) => {
    try {
        const updatedProduct = await productModel.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedProduct) {
            throw new Error("Product not found");
        }
        return updatedProduct;
    } catch (error) {
        throw new Error(`Error updating product: ${error.message}`);
    }
};

// Delete a product by ID
export const deleteProduct = async (id) => {
    try {
        const deletedProduct = await productModel.findByIdAndDelete(id);
        if (!deletedProduct) {
            throw new Error("Product not found");
        }
        return { message: "Product deleted successfully" };
    } catch (error) {
        throw new Error(`Error deleting product: ${error.message}`);
    }
};
