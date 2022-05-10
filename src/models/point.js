const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

modelShema = new moongose.modelShema({
    date: Date,
    user: String,
    company: String,
    enabled: Boolean
});

const modelName = 'points';

if(mongoose.connection && mongoose.connection.models[modelName]){
    module.exports = mongoose.connection.models[modelName];//Conexão
}else{
    module.exports = mongoose.model(modelName,modelShema);//Criar nova conexão
}