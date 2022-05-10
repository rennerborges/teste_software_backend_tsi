const moongose = require('mongoose');
mongoose.Promise = global.Promise;

modelShema = new moongose.modelShema({
    name: String,
    email: String,
    cpf: String,
    tel: String,
    dateOfBirth: Date,
    company: Number,
    role: String,
    workload: Number,
    enabled: Boolean
});

const modelName = 'users';

if(mongoose.connection && mongoose.connection.models[modelName]){
    module.exports = mongoose.connection.models[modelName];//Conexão
}else{
    module.exports = mongoose.model(modelName,modelShema);//Criar nova conexão
}