import { useState, useEffect } from "react";
import axios from "axios";

function Publisher() {
  //current state is notes == change state is after setState
  const [notes, setNotes] = useState(null);
  const [createForm, setCreateForm] = useState({
    title: "",
    body: "",
  });
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: '', 
    body: ''
  })

  //Any function in this is executed as soon as the window is loaded..
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    //fetch notes
    const res = await axios.get("http://localhost:3001/data");
    //set to state
    setNotes(res.data.data);
    // console.log(res.data.notes);
  };

  const updateCreateForm = (e) => {
    const { name, value } = e.target;

    setCreateForm({
      //this duplicates the object in the usestate
      ...createForm,
      [name]: value,
    });
  };

  const createNote = async (e) => {
    e.preventDefault();
    //create the note
    const res = await axios.post("http://localhost:3001/notes", createForm);
    fetchNotes();

    //clear form state
    setCreateForm({
      title: "",
      body: "",
    });
    // console.log(res)
  };

  const deleteNote = async (_id) => {
    const res = await axios.delete(`http://localhost:3001/notes/${_id}`);
    fetchNotes();
    //console.log(res)
  };

  const handleUpdateFieldChange = async (e) => {
    const {value, name} = e.target;

    setUpdateForm({
      ...updateForm, 
      [name]: value
    })

  }

  const updateNote = async (note) => {

    //get current note values
    setUpdateForm({title: note.title, body: note.body, _id: note._id})
    console.log(note)

    //set state on update form
  };

  const update = async (e) => {
    e.preventDefault()
    const {title, body} = updateForm

    const res = await axios.put(`http://localhost:3001/notes/${updateForm._id}`, { title, body });
    
    fetchNotes()

    setUpdateForm({
      _id: null, 
      title: '', 
      body: ''
    })
    console.log(res)
  }

  return (
    <div className="App">
      <div>
        <h1>Publisher</h1>
      </div>

      <h1>Notes:</h1>
      {notes &&
        notes.map((record) => {
          const filteredRecord = Object.entries(record)
            .filter(([key]) => key !== "_id" && key !== "__v")
            .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});



          return (
            <div>
             {Object.entries(filteredRecord).map(([heading, value], index) => (
                <div
                  key={index}
                  style={{
                    textAlign: "center",
                    margin: "10px",
                    padding: "10px",
                    border: "1px solid #ddd",
                  }}
                >
                  <h4 style={{ marginBottom: "5px" }}>{heading}</h4>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          );
        })}
         <button onClick={null}>Publish</button>
         <button onClick={null}>Reject</button>
    </div>
  );
}

export default Publisher;
