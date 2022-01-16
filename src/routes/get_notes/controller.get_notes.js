const { getNotesService } = require("./service.get_notes")

module.exports = {
    getNotesCntroller: (req, res)=>{
        getNotesService((e, result)=>{
            if(!e){
                res.status(200).send(result);
            } else {
                res.status(400).send(e);
            }
        })
    }
}