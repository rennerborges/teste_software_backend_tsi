const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const modelSchema = new mongoose.Schema({
  date: Date,
  user: String,
  company: String,
  enabled: Boolean,
});

const modelName = 'points';

if (mongoose.connection && mongoose.connection.models[modelName]) {
  module.exports = mongoose.connection.models[modelName]; // Conexão
} else {
  module.exports = mongoose.model(modelName, modelSchema); // Criar nova conexão
}
