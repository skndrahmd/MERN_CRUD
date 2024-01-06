require("dotenv").config();

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001;
// const mongoose = require('mongoose');
const connectToDb = require('./Config/connectToDb.js');

//used to read json using express
app.use(express.json());
//const Note = require('./models/note.js')
const notesController = require('./controllers/notesController.js');
const dataController = require('./controllers/dataController.js');

app.use(cors());

connectToDb();

//getting all notes
app.get('/notes', notesController.fetchAllNotes)

//getting one specific note
app.get('/notes/:id', notesController.fetchNoteById)

//creating a note
app.post('/notes', notesController.createNote)

//update a specific note
app.put("/notes/:id", notesController.updateNote)

//delete a specific note
app.delete('/notes/:id', notesController.deleteNote)



//getting all data
app.get('/data', dataController.fetchAllData)

//getting one specific data
app.get('/data/:id', dataController.fetchDataById)

//creating a data record
app.post('/data', dataController.createData)

//update a specific data record
app.put("/data/:id", dataController.updateData)

//delete a specific data record
app.delete('/data/:id', dataController.deleteData)



app.listen(process.env.PORT)
  
