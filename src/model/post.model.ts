import mongoose, { Schema, Document, mongo } from "mongoose";
import { PostData } from "../../types";



const postSchema = new Schema({
    post: {
        type: String,
        required: true,
        max: [250, "Cannot be more than 250 characters"]
    }
});


export const Post = mongoose.model<PostData>('Post', postSchema);