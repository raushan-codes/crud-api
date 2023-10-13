import { PostData } from "../../types";
import { Post } from "../model/post.model"; 

export class PostRepository{
    private _model = Post;
    async create(data: PostData): Promise<PostData>{
        return this._model.create(data);
    };
    async getAllPosts(): Promise<PostData[]>{
        return this._model.find();
    }
    async getPostById(id: string): Promise<PostData | null>{
        return this._model.findById(id);
    };
    async remove(id: string): Promise<PostData | null>{
        return this._model.findByIdAndRemove(id);
    };
    async update(id: string, data: PostData): Promise<PostData | null>{
        return this._model.findByIdAndUpdate(id, {...data});
    };

}