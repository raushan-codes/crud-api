"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const post_routes_1 = __importDefault(require("./routes/post.routes"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use('/v1', post_routes_1.default);
