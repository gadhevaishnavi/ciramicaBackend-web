import specialproductModel from "../models/specialproductModel.js";

// Get all special products
export const getAllSpecialProducts = async () => {
    try {
        return await specialproductModel.find();
    } catch (error) {
        throw new Error(`Error fetching special products: ${error.message}`);
    }
};

// Get a special product by ID
export const getSpecialProductById = async (id) => {
    try {
        const product = await specialproductModel.findById(id);
        if (!product) {
            throw new Error("Special product not found");
        }
        return product;
    } catch (error) {
        throw new Error(`Error fetching special product: ${error.message}`);
    }
};

// Create a new special product
export const createSpecialProduct = async (productData) => {
    try {
        const newProduct = new specialproductModel(productData);
        return await newProduct.save();
    } catch (error) {
        throw new Error(`Error creating special product: ${error.message}`);
    }
};

// Update a special product by ID
export const updateSpecialProduct = async (id, updatedData) => {
    try {
        const updatedProduct = await specialproductModel.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedProduct) {
            throw new Error("Special product not found");
        }
        return updatedProduct;
    } catch (error) {
        throw new Error(`Error updating special product: ${error.message}`);
    }
};

// Delete a special product by ID
export const deleteSpecialProduct = async (id) => {
    try {
        const deletedProduct = await specialproductModel.findByIdAndDelete(id);
        if (!deletedProduct) {
            throw new Error("Special product not found");
        }
        return { message: "Special product deleted successfully" };
    } catch (error) {
        throw new Error(`Error deleting special product: ${error.message}`);
    }
};
