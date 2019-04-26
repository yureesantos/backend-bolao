module.exports = {
  mongoURI: `mongodb+srv://${process.env.MONGO_USER}:${
    process.env.MONGO_PASSWORD
  }@cluster0-a5cam.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true`,
};
