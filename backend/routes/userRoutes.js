import express from "express";
import {
  register,
  login,
  currentUser,
  allUsers,
  friendsAdd,
} from "../controllers/userController.js";
import verifyToken from "../middleware/tokenHandeler.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/friend", verifyToken, friendsAdd);
router.get("/current", verifyToken, currentUser);
router.get("/all", verifyToken, allUsers);
export default router;
