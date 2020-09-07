const mongoose = require('mongoose');

// const connectionURL = process.env.DATABASE_CONNECTION_URL;
const connectionURL = `mongodb://127.0.0.1:27017/recipe-book`;

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}, (err) => {
    if(!err) {
        return console.log('Connected to MongoDB!');
    }
    return console.log(err)
});


