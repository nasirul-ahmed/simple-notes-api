const {addNoteService} = require('./service.add_notes');

module.exports = {
    addNoteController: (req, res)=>{
        //const {title, content, author} = req.body;
        addNoteService(req.body, (e, result) => {
            if(!e){
                return res.status(200).send(result);
            } else{
                return res.status(400).send(e);
            }
        });
    }
}