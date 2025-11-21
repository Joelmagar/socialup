import express from "express";
const router = express.Router();
import {
  messagePost,
  messageDelete,
  messageGet,
  messageRecent,
} from "../controllers/chatController.js";

router.route("/").post(messagePost).get(messageGet).delete(messageDelete);
router.route("/recent/:id").get(messageRecent);

export default router;
