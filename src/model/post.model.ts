import mongoose, { Schema, Document, mongo } from "mongoose";



const postSchema = new Schema({
    post: {
        type: String,
        required: true,
        max: [250, "Cannot be more than 250 characters"]
    }
});
export interface PostData extends mongoose.Document {
    post: string
}

export const Post = mongoose.model<PostData>('Post', postSchema);