const Note = require("../../model/Note")

module.exports = {
    getNotesService: async (cb)=>{
        try {
            const notes =await Note.find();
            return cb(null, notes);
        } catch (error) {
            return cb(error);
        }
    }
}