"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostById = exports.removePostById = exports.getPostById = exports.getPosts = exports.createPost = void 0;
const post_service_1 = require("../service/post.service");
const asyncHandler_1 = require("../utils/asyncHandler");
const postService = new post_service_1.PostService();
exports.createPost = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const newPost = yield postService.create(data);
    return res.status(201).json({
        success: true,
        message: 'Successfully created the Post',
        data: newPost,
        err: {}
    });
}));
exports.getPosts = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield postService.getAllPosts();
    return res.status(200).json({
        success: true,
        message: 'Successfully created the Post',
        data: posts,
        err: {}
    });
}));
exports.getPostById = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield postService.getPostById(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Successfully created the Post',
            data: post,
            err: {}
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Failed to create the Post',
            err: error.message
        });
    }
}));
exports.removePostById = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const removedPost = yield postService.removePost(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Successfully delete the Post',
            data: removedPost,
            err: {}
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Failed to delete the Post',
            err: error.message
        });
    }
}));
exports.updatePostById = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedPost = yield postService.updatePost(id, data);
        return res.status(200).json({
            success: true,
            message: 'Successfully updated the post',
            data: updatedPost,
            err: {}
        });
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: "updation failed",
            err: error.message
        });
    }
}));
