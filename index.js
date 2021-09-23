import mongoose from 'mongoose';
import TweetaUser from './models/tweetaUser.js';
import Tweet from './models/tweet.js';
import Reply from './models/reply.js';
import Like from './models/like.js';

// > use designeyExercise
// > db.createUser({ user: "Tweeta", pwd: "tw33taPw0rd", roles: ["readWrite"] })

const username = "Tweeta";
const password = "tw33taPw0rd";
const db = "designeyExercise";

const connectionString = `mongodb://${username}:${password}@localhost:27017/${db}`;

mongoose.connection.on('error', 
    (e) => console.log(">> Error!", e))
        || process.exit(0)
mongoose.connection.on('connecting', 
    () => console.log(">> Connecting"));
mongoose.connection.on('disconnecting', 
    () => console.log(">> Disconnecting"));
mongoose.connection.on('disconnected', 
    () => console.log(">> Disconnected"));

try {
    await mongoose.connect(connectionString);
    console.log("Connected to mongoose");

    const tweetaUserOne = new TweetaUser({ id: 1, name: "TweetaUser One", email: "tu1@tweeta.com", city: "San Francisco", timezone: "PST" });

    tweetaUserOne.save()
        .then(() => console.log(`New TweetaUser ${tweetaUserOne} saved!`))
        .catch((e) => console.log("Unable to save", e))
        // .finally(() => mongoose.connection.close());

    // --------------
    const tweet1 = new Tweet({
        id: 1,
        text: "Hello World! How are you?",
        created: new Date(),
        user: tweetaUserOne._id,
        retweets: null,
        replies: null
    });

    tweet1.save()
        .then(() => console.log(`New Tweet ${tweet1} saved!`))
        .catch((e) => console.log("Unable to save", e));

    // --------------
    const reply1 = new Reply({
        id: 1,
        text: "I'm very well, thank you!",
        user: tweetaUserOne._id,
        tweet: tweet1._id,
        created: new Date()
    });

    reply1.save()
        .then(() => console.log(`New Reply ${reply1} saved!`))
        .catch((e) => console.log("Unable to save", e));

    // --------------

    const like1 = new Like({
        id: 1,
        tweet: tweet1._id,
        user: tweetaUserOne._id,
        created: new Date()
    });

    like1.save()
        .then(() => console.log(`New Like ${like1} saved!`))
        .catch((e) => console.log("Unable to save", e))
        .finally(() => mongoose.connection.close());

} catch (error) {
    console.log("Errrrrrrror: ", error)
}