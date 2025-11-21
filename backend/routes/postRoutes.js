import express from "express";
import fs from "fs";
import path from "path";
import multer from "multer";
import {
  deletePost,
  likesPost,
  addPost,
  getPost,
  messagePost,
} from "../controllers/postController.js";
import verifyToken from "../middleware/tokenHandeler.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

// Ensure 'uploads/' folder exists before saving files
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure Multer to store files on disk
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Save uploads to "uploads" directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Rename file
  },
});

const upload = multer({ storage });

router.use(verifyToken);

// Routes
router
  .route("/post")
  .get(getPost)
  .post(upload.single("file"), addPost)
  .delete(deletePost);
router.route("/post/like").post(likesPost);
router.route("/post/comment").post(messagePost);
export default router;
