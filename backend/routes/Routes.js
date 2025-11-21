import express from "express";
import verifyToken from "../middleware/tokenHandeler.js";
const router = express.Router();
import {
  getContact,
  createContact,
  deleteContact,
  putContact,
} from "../controllers/ContactController.js";

router.use(verifyToken);
router.route("/").get(getContact).post(createContact);
router.route("/:id").delete(deleteContact).patch(putContact);

export default router;
