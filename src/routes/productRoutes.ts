import { Router } from "express";
import {
    getAllProduct, 
    getProductByID, 
    createProduct, 
    updateProduct, 
    deleteProduct
} from "../controllers/productcontroller"

const router = Router();

router.get("products/", getAllProduct);
router.get("products/:id", getProductByID);
router.post("products/", createProduct);
router.put("product/:id", updateProduct);
router.delete("products/:id", deleteProduct);

export default router;
