import * as specialProductService from "../services/specialProductService.js";

// Create Special Product
export const createSpecialProduct = async (req, res) => {
    try {
        const product = await specialProductService.createSpecialProduct(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get All Special Products
export const getAllSpecialProducts = async (req, res) => {
    try {
        const products = await specialProductService.getAllSpecialProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Special Product by ID
export const getSpecialProductById = async (req, res) => {
    try {
        const product = await specialProductService.getSpecialProductById(req.params.id);
        if (!product) return res.status(404).json({ error: "Product not found" });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Special Product
export const updateSpecialProduct = async (req, res) => {
    try {
        const product = await specialProductService.updateSpecialProduct(req.params.id, req.body);
        if (!product) return res.status(404).json({ error: "Product not found" });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Special Product
export const deleteSpecialProduct = async (req, res) => {
    try {
        const product = await specialProductService.deleteSpecialProduct(req.params.id);
        if (!product) return res.status(404).json({ error: "Product not found" });
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
