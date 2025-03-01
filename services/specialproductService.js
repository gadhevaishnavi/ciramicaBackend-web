import specialproductModel from "../models/specialProductModel.js"; // Adjust path if needed

// Create a new special product
export const createSpecialProduct = async (productData) => {
    try {
        const newProduct = new specialproductModel(productData);
        return await newProduct.save();
    } catch (error) {
        throw new Error(`Error creating product: ${error.message}`);
    }
};

// Get all special products
export const getAllSpecialProducts = async () => {
    try {
        return await specialproductModel.find();
    } catch (error) {
        throw new Error(`Error fetching products: ${error.message}`);
    }
};

// Get a single special product by ID
export const getSpecialProductById = async (productId) => {
    try {
        return await specialproductModel.findById(productId);
    } catch (error) {
        throw new Error(`Product not found: ${error.message}`);
    }
};

// Update a special product by ID
export const updateSpecialProduct = async (productId, updateData) => {
    try {
        return await specialproductModel.findByIdAndUpdate(productId, updateData, { new: true });
    } catch (error) {
        throw new Error(`Error updating product: ${error.message}`);
    }
};

// Delete a special product by ID
export const deleteSpecialProduct = async (productId) => {
    try {
        return await specialproductModel.findByIdAndDelete(productId);
    } catch (error) {
        throw new Error(`Error deleting product: ${error.message}`);
    }
};
