import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
    id: Number,
    text: String,
    created: Date,
    user: mongoose.Types.ObjectId,
    retweets: Number,
    replies: Number
});

const Tweet = mongoose.model("tweets", tweetSchema);

export default Tweet;