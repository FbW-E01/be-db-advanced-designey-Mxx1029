import mongoose from 'mongoose';

const tweetaUserSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    city: String,
    timezone: String
});

const TweetaUser = mongoose.model("tweetaUsers", tweetaUserSchema);

export default TweetaUser;