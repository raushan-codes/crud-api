import { PostData } from "../../types";
import { PostRepository } from "../repository/post.repository";
import CustomError from "../utils/customError";
import { redis } from "../utils/redis";

export class PostService {
    PostRepository: PostRepository;
    constructor() {
        this.PostRepository = new PostRepository();
    };
    async create(data: PostData): Promise<PostData> {
        try {
            const post = await this.PostRepository.create(data);
            const cachedPosts: PostData[] | null = await redis.get('posts');
            cachedPosts?.push(post);
            await redis.set('posts', JSON.stringify(cachedPosts))
            return post
        } catch (error: any) {
            throw new CustomError("Post Creation Failed", 400);
        }
    }
    async getAllPosts(): Promise<PostData[] | {} | null> {
        try {
            let cachedPosts: PostData[] | {} | null = await redis.get('posts');
            if (cachedPosts) {
                return cachedPosts;
            }
            const posts = await this.PostRepository.getAllPosts();
            await redis.set('posts', JSON.stringify(posts));
            return posts;

        } catch (error: any) {
            throw new CustomError("Posts Fetch Failed", 404);
        }
    }
    async getPostById(id: string): Promise<PostData | null> {
        try {
            let cachePostKey = `post-${id}`
            let cachedPost: PostData | null = await redis.get(cachePostKey);
            if(cachedPost){
                return cachedPost;
            }
            const post = await this.PostRepository.getPostById(id);
            await redis.set(cachePostKey, JSON.stringify(post))
            return post;
        } catch (error: any) {
            throw new CustomError("Post Fetch Failed", 404);
        }
    }
    async removePost(id: string): Promise<PostData | null> {
        try {
            const post = await this.PostRepository.remove(id);
            return post;
        } catch (error: any) {
            throw new CustomError("Post Deletion Failed", 400);
        }
    }
    async updatePost(id: string, data: PostData): Promise<PostData | null> {
        try {
            const post = await this.PostRepository.update(id, data);
            return post;
        } catch (error: any) {
            throw new CustomError("Posts Updation Failed", 400);
        }
    }
}
