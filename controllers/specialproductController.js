import multer from "multer";
import {
    getAllSpecialProducts,
    getSpecialProductById,
    createSpecialProduct,
    updateSpecialProduct,
    deleteSpecialProduct
} from "../services/specialproductService.js";

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

// Get all special products
export const getAllSpecialProductsController = async (req, res) => {
    try {
        const products = await getAllSpecialProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a special product by ID
export const getSpecialProductByIdController = async (req, res) => {
    try {
        const product = await getSpecialProductById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Create a new special product with image upload
export const createSpecialProductController = async (req, res) => {
    try {
        const imageUrls = req.files ? req.files.map(file => file.path) : []; // Handle multiple images
        const productData = { ...req.body, images: imageUrls };
        const product = await createSpecialProduct(productData);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a special product by ID with image upload
export const updateSpecialProductController = async (req, res) => {
    try {
        const imageUrls = req.files ? req.files.map(file => file.path) : []; // Handle multiple images
        const updatedData = { ...req.body, images: imageUrls };
        const updatedProduct = await updateSpecialProduct(req.params.id, updatedData);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a special product by ID
export const deleteSpecialProductController = async (req, res) => {
    try {
        const response = await deleteSpecialProduct(req.params.id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Export Multer upload middleware for routes
export { upload };
