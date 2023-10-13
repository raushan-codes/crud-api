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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const post_repository_1 = require("../repository/post.repository");
const customError_1 = __importDefault(require("../utils/customError"));
const redis_1 = require("../utils/redis");
class PostService {
    constructor() {
        this.PostRepository = new post_repository_1.PostRepository();
    }
    ;
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield this.PostRepository.create(data);
                const cachedPosts = yield redis_1.redis.get('posts');
                cachedPosts === null || cachedPosts === void 0 ? void 0 : cachedPosts.push(post);
                yield redis_1.redis.set('posts', JSON.stringify(cachedPosts));
                return post;
            }
            catch (error) {
                throw new customError_1.default("Post Creation Failed", 400);
            }
        });
    }
    getAllPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cachedPosts = yield redis_1.redis.get('posts');
                if (cachedPosts) {
                    return cachedPosts;
                }
                const posts = yield this.PostRepository.getAllPosts();
                yield redis_1.redis.set('posts', JSON.stringify(posts));
                return posts;
            }
            catch (error) {
                throw new customError_1.default("Posts Fetch Failed", 404);
            }
        });
    }
    getPostById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cachePostKey = `post-${id}`;
                let cachedPost = yield redis_1.redis.get(cachePostKey);
                if (cachedPost) {
                    return cachedPost;
                }
                const post = yield this.PostRepository.getPostById(id);
                yield redis_1.redis.set(cachePostKey, JSON.stringify(post));
                return post;
            }
            catch (error) {
                throw new customError_1.default("Post Fetch Failed", 404);
            }
        });
    }
    removePost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield this.PostRepository.remove(id);
                return post;
            }
            catch (error) {
                throw new customError_1.default("Post Deletion Failed", 400);
            }
        });
    }
    updatePost(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield this.PostRepository.update(id, data);
                return post;
            }
            catch (error) {
                throw new customError_1.default("Posts Updation Failed", 400);
            }
        });
    }
}
exports.PostService = PostService;
