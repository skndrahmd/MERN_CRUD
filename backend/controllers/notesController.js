const Note = require("../models/note.js");

//fetch all notes
const fetchAllNotes = async (req, res) => {
  //Find the notes
  const notes = await Note.find();

  //respond with the notes
  res.json({ notes: notes });
};

//fetch a specific note
const fetchNoteById = async (req, res) => {
  //get id from url
  const note_id = req.params.id;
  //find note using that id
  const note = await Note.findById(note_id);
  //respond with the note
  res.json({ note: note });
};

//create a note
const createNote = async (req, res) => {
  //get the sent in data of the req.body
  const title = req.body.title;
  const body = req.body.body;

  //create a note with it
  const note = await Note.create({
    title: title,
    body: body,
  });

  //respond with the new note
  res.json({ note: note });
};

//update note
const updateNote = async (req, res) => {
  const note_id = req.params.id;
  const new_title = req.body.title;
  const new_body = req.body.body;

  const new_note = await Note.findByIdAndUpdate(note_id, {
    title: new_title,
    body: new_body,
  });

  const updated_note = await Note.findById(note_id);

  res.json({ note: updated_note });
};

//delete a note
const deleteNote = async (req, res) => {
  const id = req.params.id;

  const deleted_note = await Note.findByIdAndDelete(id);

  res.json({ note: deleted_note });
};

module.exports = {
  fetchAllNotes,
  fetchNoteById,
  createNote,
  updateNote,
  deleteNote,
};
