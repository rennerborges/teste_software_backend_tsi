const moongose = require('mongoose');
mongoose.Promise = global.Promise;

modelShema = new moongose.modelShema({
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
    module.exports = mongoose.model(modelName,modelShema);//Criar nova conexão
}