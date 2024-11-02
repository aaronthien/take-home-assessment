const mongoose = require('mongoose');
const MONGO_URI = "";

mongoose.connect(MONGO_URI, {
  dbName: 'takehome'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const authSchema = new Schema ({
    username: {type: String, required: true},
    password: {type: String, required: true}
})

const fullSchema = new Schema ({
    auth: authSchema,
  });
  

module.exports = mongoose.model('FullSchema', fullSchema)
