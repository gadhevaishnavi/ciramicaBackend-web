import express from "express";
import * as specialProductController from "../controllers/specialProductController.js";

const router = express.Router();

router.post("/", specialProductController.createSpecialProduct);
router.get("/", specialProductController.getAllSpecialProducts);
router.get("/:id", specialProductController.getSpecialProductById);
router.put("/:id", specialProductController.updateSpecialProduct);
router.delete("/:id", specialProductController.deleteSpecialProduct);

export default router;
