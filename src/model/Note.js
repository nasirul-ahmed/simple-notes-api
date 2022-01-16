const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        min: 6,
        max: 255,
    },
    content: {
        type: String,
        min: 6,
        max: 1024,
    },
    author:{
        type: String,
        min: 5, 
        max: 255
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports= mongoose.model("Note", noteSchema);