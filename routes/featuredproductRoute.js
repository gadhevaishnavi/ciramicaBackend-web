import express from "express";
import {
    getAllFeatureProductsController,
    getFeatureProductByIdController,
    createFeatureProductController,
    updateFeatureProductController,
    deleteFeatureProductController,
    upload // Import Multer middleware for file uploads
} from "../controllers/featureproductController.js";

const featureRoute = express.Router();

// Define routes
featureRoute.get("/", getAllFeatureProductsController); // Get all featured products
featureRoute.get("/:id", getFeatureProductByIdController); // Get a featured product by ID
featureRoute.post("/", upload.array("images", 5), createFeatureProductController); // Create a new featured product with image upload
featureRoute.put("/:id", upload.array("images", 5), updateFeatureProductController); // Update a featured product with image upload
featureRoute.delete("/:id", deleteFeatureProductController); // Delete a featured product

export default featureRoute;
