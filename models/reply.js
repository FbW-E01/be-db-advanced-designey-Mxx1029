import mongoose from 'mongoose';

const replySchema = new mongoose.Schema({
    id: Number,
    text: String,
    user: mongoose.Types.ObjectId,
    tweet: mongoose.Types.ObjectId,
    created: Date
});

const Reply = mongoose.model("replies", replySchema);

export default Reply;