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
exports.PostRepository = void 0;
const post_model_1 = require("../model/post.model");
class PostRepository {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield post_model_1.Post.create(data);
            return post;
        });
    }
    ;
    getAllPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield post_model_1.Post.find();
            return posts;
        });
    }
    getPostById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield post_model_1.Post.findById(id);
            return post;
        });
    }
    ;
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield post_model_1.Post.findByIdAndRemove(id);
            return post;
        });
    }
    ;
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield post_model_1.Post.findByIdAndUpdate(id, Object.assign({}, data));
            return post;
        });
    }
    ;
}
exports.PostRepository = PostRepository;
