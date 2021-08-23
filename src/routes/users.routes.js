import { Router } from "express";
import usersCtrl from "../controllers/users.controllers";

const router = Router();

//   middleware func req,rest next => cookies para token. Decrypt & check admin
// next();
router.route("/").get(usersCtrl.listUsers).post(usersCtrl.newUser);
router
  .route("/:id")
  .delete(usersCtrl.deleteUser)
  .put(usersCtrl.editUser)
  .get(usersCtrl.getTheUser);

router.route("/login").post(usersCtrl.authUser);

export default router;
