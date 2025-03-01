import express from "express";
import * as featureProductController from "../controllers/featureProductController.js";

const router = express.Router();

router.post("/", featureProductController.createFeatureProduct);
router.get("/", featureProductController.getAllFeatureProducts);
router.get("/:id", featureProductController.getFeatureProductById);
router.put("/:id", featureProductController.updateFeatureProduct);
router.delete("/:id", featureProductController.deleteFeatureProduct);

export default router;
