import express from "express";
import productRoutes from "./products/ProductRoutes";
import ordersRoutes from "./orders/OrderRoutes";

const router: express.Router = express.Router();

router.use("/products", productRoutes);
router.use("/orders", ordersRoutes);

export default router;
