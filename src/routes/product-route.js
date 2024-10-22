import e from "express";
const router = e.Router();
import controllers from "../controllers/product-controller.js";

router.post('/', controllers.store);
router.get('/', controllers.show);
router.get('/:id', controllers.showById);

export default router;