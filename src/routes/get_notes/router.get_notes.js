const { getNotesCntroller } = require('./controller.get_notes');

const router = require('express').Router();

router.get("/get-notes", getNotesCntroller)

module.exports = router;