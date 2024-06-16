import express, { Request, Response } from "express";
import ProductController from "../../controllers/products/ProductController";
const router: express.Router = express.Router();

const controller: ProductController = new ProductController();

router
  .route("/:id")
  .get((req: Request, res: Response) => {
    controller.findById(req.params.id, res);
  })
  .delete((req: Request, res: Response) => {
    controller.delete(req.params.id, res);
  })
  .patch((req: Request, res: Response) => {
    controller.update(Number(req.params.id), req, res);
  });
router.route("/").get(controller.get).post(controller.create);
router.route("/findByName").post(controller.findByName);
router.route("/findSales").get(controller.findSales);
export default router;
