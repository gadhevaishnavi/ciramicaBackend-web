import express from "express";
import { upload } from "../controllers/specialproductController.js";
import {
    getAllSpecialProductsController,
    getSpecialProductByIdController,
    createSpecialProductController,
    updateSpecialProductController,
    deleteSpecialProductController
} from "../controllers/specialproductController.js";

const specialproductRoute = express.Router();

// Route to get all special products
specialproductRoute.get("/", getAllSpecialProductsController);

// Route to get a special product by ID
specialproductRoute.get("/:id", getSpecialProductByIdController);

// Route to create a new special product with image upload
specialproductRoute.post("/", upload.array("images", 5), createSpecialProductController); // Allows up to 5 images

// Route to update a special product by ID with image upload
specialproductRoute.put("/:id", upload.array("images", 5), updateSpecialProductController);

// Route to delete a special product by ID
specialproductRoute.delete("/:id", deleteSpecialProductController);

export default specialproductRoute;
