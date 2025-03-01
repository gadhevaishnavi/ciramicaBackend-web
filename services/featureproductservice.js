import featureproductModel from "../models/featureProductModel.js"; // Adjust path if needed

// Create a new feature product
export const createFeatureProduct = async (productData) => {
    try {
        const newProduct = new featureproductModel(productData);
        return await newProduct.save();
    } catch (error) {
        throw new Error(`Error creating feature product: ${error.message}`);
    }
};

// Get all feature products
export const getAllFeatureProducts = async () => {
    try {
        return await featureproductModel.find();
    } catch (error) {
        throw new Error(`Error fetching feature products: ${error.message}`);
    }
};

// Get a single feature product by ID
export const getFeatureProductById = async (productId) => {
    try {
        return await featureproductModel.findById(productId);
    } catch (error) {
        throw new Error(`Feature product not found: ${error.message}`);
    }
};

// Update a feature product by ID
export const updateFeatureProduct = async (productId, updateData) => {
    try {
        return await featureproductModel.findByIdAndUpdate(productId, updateData, { new: true });
    } catch (error) {
        throw new Error(`Error updating feature product: ${error.message}`);
    }
};

// Delete a feature product by ID
export const deleteFeatureProduct = async (productId) => {
    try {
        return await featureproductModel.findByIdAndDelete(productId);
    } catch (error) {
        throw new Error(`Error deleting feature product: ${error.message}`);
    }
};
