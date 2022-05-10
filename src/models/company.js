const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const modelSchema = new mongoose.Schema({
    fantasyName: String,
    corporateName: String,
    cnpj: String,
    areaOfOperation: String,
    enabled: Boolean
});

const modelName = 'companies';

if(mongoose.connection && mongoose.connection.models[modelName]){
    module.exports = mongoose.connection.models[modelName];//Conexão
}else{
    module.exports = mongoose.model(modelName,modelSchema);//Criar nova conexão
}