import featureproductModel from "../models/featureproductModel.js";

// Get all featured products
export const getAllFeatureProducts = async () => {
    try {
        return await featureproductModel.find();
    } catch (error) {
        throw new Error(`Error fetching feature products: ${error.message}`);
    }
};

// Get a featured product by ID
export const getFeatureProductById = async (id) => {
    try {
        const product = await featureproductModel.findById(id);
        if (!product) {
            throw new Error("Feature product not found");
        }
        return product;
    } catch (error) {
        throw new Error(`Error fetching feature product: ${error.message}`);
    }
};

// Create a new featured product
export const createFeatureProduct = async (productData) => {
    try {
        const newProduct = new featureproductModel(productData);
        return await newProduct.save();
    } catch (error) {
        throw new Error(`Error creating feature product: ${error.message}`);
    }
};

// Update a featured product by ID
export const updateFeatureProduct = async (id, updatedData) => {
    try {
        const updatedProduct = await featureproductModel.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedProduct) {
            throw new Error("Feature product not found");
        }
        return updatedProduct;
    } catch (error) {
        throw new Error(`Error updating feature product: ${error.message}`);
    }
};

// Delete a featured product by ID
export const deleteFeatureProduct = async (id) => {
    try {
        const deletedProduct = await featureproductModel.findByIdAndDelete(id);
        if (!deletedProduct) {
            throw new Error("Feature product not found");
        }
        return { message: "Feature product deleted successfully" };
    } catch (error) {
        throw new Error(`Error deleting feature product: ${error.message}`);
    }
};
