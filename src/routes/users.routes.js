import { Router } from "express";
import usersCtrl from "../controllers/users.controllers";

const router = Router();

router.route("/").get(usersCtrl.listUsers).post(usersCtrl.newUser);
router
  .route("/:id")
  .delete(usersCtrl.deleteUser)
  .put(usersCtrl.editUser)
  .get(usersCtrl.getTheUser);

export default router;
