const mongoose = require('mongoose');

const connectionURL = `mongodb://127.0.0.1:27017/recipe-book`;

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (err) => {
    if (!err) {
        return console.log('Connected to MongoDB!');
    }
    return console.log(err)
});



const House = mongoose.model('House', Schema({
    status: String,
    photos: [String]
}, { optimisticConcurrency: true }));

const house = await House.findOne({ _id });
if (house.photos.length < 2) {
    throw new Error('House must have at least two photos!');
}

const house2 = await House.findOne({ _id });
house2.photos = [];
await house2.save();

// Throws 'VersionError: No matching document found for id "..." version 0'
house.status = 'APPROVED';
await house.save();