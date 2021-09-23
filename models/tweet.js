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

// example by Joel how a reply would reference the tweet it replies to
// const tweet1 = new Tweet({
//     content: "Hello World",
//     created: new Date(),
//     replyTo: null
// })
// tweet1.save()

// const tweetReply = new Tweet({
//     content: "More like Hello Tweeta!",
//     created: new Date(),
//     replyTo: tweet1._id
// })
// tweetReply.save();