const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

const mongod = new MongoMemoryServer();

module.exports.connect = async () => {
  await mongod.start();
  const uri = await mongod.getUri();
  await mongoose.connect(uri, { useNewUrlParser: true });
};

module.exports.close = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
};

module.exports.clear = async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
};
