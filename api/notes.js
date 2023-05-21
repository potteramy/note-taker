const notes = require('express').Router();
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils')

////GEt
notes.get('/notes', async (req, res) => {
  try{
    const noteData = await readFromFile('./db/db.json')
    res.json(JSON.parse(noteData))
  }catch (err) {
    res.status(500).json(err);
  }
})


////POST
notes.post('/notes', async (req, res) => {
  try {
   readAndAppend(req.body, "./db/db.json");
   res.json(`New note added! 🚀`)
  } catch (err) {
    res.status(400).json(err);
  }
})

module.exports = notes