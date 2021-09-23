import mongoose from 'mongoose';

const likeSchema = new mongoose.Schema({
    id: Number,
    tweet: mongoose.Types.ObjectId,
    user: mongoose.Types.ObjectId,
    created: Date
});

const Like = mongoose.model("likes", likeSchema);

export default Like;