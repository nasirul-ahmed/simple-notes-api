const router = require("express").Router();
const {addNoteController} = require('./controller.add_notes');

router.post("/add-note", addNoteController);

module.exports = router;
