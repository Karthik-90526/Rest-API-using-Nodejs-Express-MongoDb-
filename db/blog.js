const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Kumar_123:Karthik123@kumar.fhnzp.mongodb.net/Kumar?retryWrites=true&w=majority")
const schema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
})
const blog=mongoose.model('studentDetails', schema);
module.exports=blog;
