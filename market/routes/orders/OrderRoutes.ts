import express, { Request, Response } from "express";
import OrderController from "../../controllers/orders/OrderController";

const router: express.Router = express.Router();

const controller: OrderController = new OrderController();
router
  .route("/:id")
  .get((req: Request, res: Response) => {
    controller.findById(req.params.id, res);
  })
  .delete((req: Request, res: Response) => {
    controller.delete(req.params.id, res);
  });
router
  .route("/")
  .get(controller.get)
  .delete(controller.delete)
  .post(controller.create);
router.route("/findById").post(controller.findById);
router.route("/findByUser/:id").get((req: Request, res: Response) => {
  controller.findByUser(req.params.id, res);
});
router.route("/findByProduct").post(controller.findByProduct);
export default router;
