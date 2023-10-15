import { Request, Response } from 'express'

import { PostService } from "../service/post.service";
import { asyncHandler } from "../utils/asyncHandler";
import { PostData } from '../model/post.model';

const postService = new PostService();

export const createPost = asyncHandler(async (req: Request, res: Response) => {
    const data: PostData = req.body;
    const newPost = await postService.create(data);
    return res.status(201).json({
        success: true,
        message: 'Successfully created the Post',
        data: newPost,
        err: {}
    })
});

export const getPosts = asyncHandler(async (req: Request, res: Response) => {
    const posts = await postService.getAllPosts();
    return res.status(200).json({
        success: true,
        message: 'Successfully created the Post',
        data: posts,
        err: {}
    });

});
export const getPostById = asyncHandler(async (req: Request, res: Response) => {
        const post = await postService.getPostById(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Successfully created the Post',
            data: post,
            err: {}
        });
});
export const removePostById = asyncHandler(async (req: Request, res: Response) => {
        const removedPost = await postService.removePost(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Successfully delete the Post',
            data: removedPost,
            err: {}
        });
    
});

export const updatePostById = asyncHandler(async (req: Request, res: Response) => {
        const {id} = req.params;
        const data = req.body;
        const updatedPost = await postService.updatePost(id, data);
        return res.status(200).json({
            success: true,
            message: 'Successfully updated the post',
            data: updatedPost,
            err: {}
        })
    
})



