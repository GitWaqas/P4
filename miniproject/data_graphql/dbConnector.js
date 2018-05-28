// Mongo connection
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://WaqasMongo:mongoPass00@ds137740.mlab.com:37740/mongominiproject");



const blogScema = new mongoose.Schema({
    headline: {
        type: String
    },
    content: {
        type: String
    },
    likes: {
        type: Array
    }

});

const Blogs = mongoose.model("blogs", blogScema);


module.exports = {
    Blogs
};