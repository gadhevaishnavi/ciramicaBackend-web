import express from "express";
import multer from "multer";
import {
    getAllProductsController,
    getProductByIdController,
    createProductController,
    updateProductController,
    deleteProductController
} from "../controllers/productController.js";

// Configure multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Save files in "uploads" folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname); // Unique filename
    }
});

// Multer upload instance
const upload = multer({ storage: storage });

const router = express.Router();

// Define routes with multer middleware for file upload
router.get("/", getAllProductsController);
router.get("/:id", getProductByIdController);
router.post("/", upload.array("images", 5), createProductController); // Upload multiple images
router.put("/:id", upload.array("images", 5), updateProductController);
router.delete("/:id", deleteProductController);

export default router;
