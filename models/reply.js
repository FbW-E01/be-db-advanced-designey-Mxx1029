import mongoose from 'mongoose';

const replySchema = new mongoose.Schema({
    id: Number,
    text: String,
    author: mongoose.Types.ObjectId,
    tweets: mongoose.Types.ObjectId,
    created: Date
});

const Reply = mongoose.model("replies", replySchema);

export default Reply;