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
exports.PostService = void 0;
const post_repository_1 = require("../repository/post.repository");
class PostService {
    constructor() {
        this.PostRepository = new post_repository_1.PostRepository();
    }
    ;
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield this.PostRepository.create(data);
                return post;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    getAllPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield this.PostRepository.getAllPosts();
                return posts;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    getPostById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield this.PostRepository.getPostById(id);
                return post;
            }
            catch (error) {
                throw new Error(error.message);
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
                throw new Error(error.message);
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
                throw new Error(error.message);
            }
        });
    }
}
exports.PostService = PostService;
