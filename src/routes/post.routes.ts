import { Router } from "express";
import { createPost, getPostById, getPosts, removePostById, updatePostById } from "../controller/post.controller";

const router = Router();

// GET
router.route('/posts').get(getPosts).post(createPost);
router.route('/posts/:id').get(getPostById).delete(removePostById).put(updatePostById);


// POST

// PUT/PATCH

// DELETE


export default router;