import mongoose from 'mongoose';
import TweetaUser from './models/tweetaUser.js';

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
        .finally(() => mongoose.connection.close());
} catch (error) {
    console.log("Errrrrrrror: ", error)
}