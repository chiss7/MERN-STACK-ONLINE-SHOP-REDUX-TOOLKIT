import { Router } from "express";
import ProductController from "../controllers/product.controllers.js";
import { isAdmin } from "../middlewares/auth.js";

const router = Router();

router.get("/", ProductController.getProducts);
router.post("/", isAdmin, ProductController.createProduct);
router.get("/:id", isAdmin, ProductController.getProductById);
router.patch("/:id", isAdmin, ProductController.updateProduct);
router.get("/:slug", ProductController.getProductBySlug);
router.delete("/:id", isAdmin, ProductController.deleteProduct);

export default router;
