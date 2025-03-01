import * as featureProductService from "../services/featureProductService.js";

// Create Feature Product
export const createFeatureProduct = async (req, res) => {
    try {
        const product = await featureProductService.createFeatureProduct(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get All Feature Products
export const getAllFeatureProducts = async (req, res) => {
    try {
        const products = await featureProductService.getAllFeatureProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Feature Product by ID
export const getFeatureProductById = async (req, res) => {
    try {
        const product = await featureProductService.getFeatureProductById(req.params.id);
        if (!product) return res.status(404).json({ error: "Feature product not found" });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Feature Product
export const updateFeatureProduct = async (req, res) => {
    try {
        const product = await featureProductService.updateFeatureProduct(req.params.id, req.body);
        if (!product) return res.status(404).json({ error: "Feature product not found" });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Feature Product
export const deleteFeatureProduct = async (req, res) => {
    try {
        const product = await featureProductService.deleteFeatureProduct(req.params.id);
        if (!product) return res.status(404).json({ error: "Feature product not found" });
        res.status(200).json({ message: "Feature product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
