const mongoose = require('mongoose');
const noteModel = require("../../model/Note");


module.exports = {
    addNoteService : async (obj, cb) => {
        const {title, content, author} = obj;
         const note = new noteModel({
             title: title,
             content: content,
             author: author,
         });

         try {
            const savedNote = await note.save();
            return cb(null, savedNote);
             
         } catch (error) {
             return cb(error);
         }

    }
}