import multer from "multer";
import {
    getAllFeatureProducts,
    getFeatureProductById,
    createFeatureProduct,
    updateFeatureProduct,
    deleteFeatureProduct
} from "../services/featureproductservice.js";

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // Save uploaded images to the "uploads" folder
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

// Get all featured products
export const getAllFeatureProductsController = async (req, res) => {
    try {
        const products = await getAllFeatureProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a featured product by ID
export const getFeatureProductByIdController = async (req, res) => {
    try {
        const product = await getFeatureProductById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Create a new featured product with image upload
export const createFeatureProductController = async (req, res) => {
    try {
        const imageUrls = req.files ? req.files.map(file => file.path) : []; // Handle multiple images
        const productData = { ...req.body, images: imageUrls };
        const product = await createFeatureProduct(productData);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a featured product by ID with image upload
export const updateFeatureProductController = async (req, res) => {
    try {
        const imageUrls = req.files ? req.files.map(file => file.path) : []; // Handle multiple images
        const updatedData = { ...req.body, images: imageUrls };
        const updatedProduct = await updateFeatureProduct(req.params.id, updatedData);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a featured product by ID
export const deleteFeatureProductController = async (req, res) => {
    try {
        const response = await deleteFeatureProduct(req.params.id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Export Multer upload middleware for routes
export { upload };
