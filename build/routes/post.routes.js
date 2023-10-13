"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = require("../controller/post.controller");
const router = (0, express_1.Router)();
// GET
router.route('/posts').get(post_controller_1.getPosts).post(post_controller_1.createPost);
router.route('/posts/:id').get(post_controller_1.getPostById).delete(post_controller_1.removePostById).put(post_controller_1.updatePostById);
// POST
// PUT/PATCH
// DELETE
exports.default = router;
