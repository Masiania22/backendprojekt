const mongoose = require('mongoose');
 
const przepisSchema = mongoose.Schema({
    danie: String,
    skladniki: String,
    kalorycznosc: Number,
});
 
module.exports = mongoose.model('Przepis', przepisSchema);