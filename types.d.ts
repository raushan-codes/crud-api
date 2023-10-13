import mongoose from "mongoose"

interface PostData extends mongoose.Document {
    post: string
}
