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
    constructor() {
        this._model = post_model_1.Post;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._model.create(data);
        });
    }
    ;
    getAllPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._model.find();
        });
    }
    getPostById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._model.findById(id);
        });
    }
    ;
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._model.findByIdAndRemove(id);
        });
    }
    ;
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._model.findByIdAndUpdate(id, Object.assign({}, data));
        });
    }
    ;
}
exports.PostRepository = PostRepository;
