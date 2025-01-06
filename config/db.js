const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect( "mongodb+srv://aakash:12345@cluster0.mk3re.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
