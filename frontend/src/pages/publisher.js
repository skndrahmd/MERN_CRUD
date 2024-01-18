import { useState, useEffect } from "react";
import axios from "axios";
import "./encoder_css.css";
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
    const { value, name } = e.target;

    setUpdateForm({
      ...updateForm,
      [name]: value
    })

  }

  const updateNote = async (note) => {

    //get current note values
    setUpdateForm({ title: note.title, body: note.body, _id: note._id })
    console.log(note)

    //set state on update form
  };

  const update = async (e) => {
    e.preventDefault()
    const { title, body } = updateForm

    const res = await axios.put(`http://localhost:3001/notes/${updateForm._id}`, { title, body });

    fetchNotes()

    setUpdateForm({
      _id: null,
      title: '',
      body: ''
    })
    console.log(res)
  }
  const columnNames = [
    "Year",
    "Month",
    "Water Intake (Purchased)",
    "Water Use (Sweat) - Use",
    "Water Loss",
    "Wastewater Disposal (Outside)",
    "Total Energy",
    "Energy Purchased (Electricity)",
    "Energy (Diesel)",
    "Total Waste",
    "Total Hazardous Waste (Landfil)",
    "Hazardous Waste (Stream # 1)",
    "Hazardous Waste (Maintenace Oil)(With Density 0_93)",
    "Total Non-Hazardous ( Landfill + Recycling)",
    "Non-Hazardous Waste (Scrap Recycling))",
    "Non-Hazardous Waste (Disposal)",
    "Total GHG (CO2)",
    "Total Consumption R22 Gas",
    "Cost of Water (Sweat) Purchase_Treatment_Water Waste_Disposal",
    "Cost of Purchased Electricity",
    "Cost of Diesel",
    "Cost of R22 Gas",
    "Cost of Hazardouse Waste Disposal",
    "Cost of Non-Hazardouse Waste Disposal",
    "Total Production Volume (Pallets Issue)",
    "Total Production Volume (Pallets Receive)",
    "Total Area (Floor Covered Area)",
    "Intensity - Water",
    "Intensity - Energy",
    "Intensity - Energy (Electricity)",
    "Intensity - Energy (Diesel)",
    "Intensity - GHG (CO2) - Scope 1 and 2",
    "Intensity - Waste Material",
    "Total Cost",
    "Comment",
  ];
  return (
    <div className="App">
      <div>
        <h1>DATA PUBLISHER</h1>
      </div>

      <h2>Records</h2>
      <div className="excel-header">
      {columnNames.map((columnName, index) => (
        <div key={index} className="box" style={{color:"white"}}>
          <h4 style={{ margin: "0px", whiteSpace: "nowrap" }}>{columnName}</h4>
        </div>
      ))}
    </div>
      {notes &&
        notes.map((record) => {
          const filteredRecord = Object.entries(record)
            .filter(([key]) => key !== "_id" && key !== "__v")
            .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
          return (
            <div className="record-2">
              {Object.entries(filteredRecord).map(([heading, value], index) => (
                <div
                  key={index}
                  className="box"
                >
                  <h4 style={{ color:"white" , margin: "0px", whiteSpace: "nowrap" }}>{heading}</h4>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          );
        })}
        <div style={{display:"flex"}}>
      <button className="nav-btn" onClick={null}>Publish Data</button>
      <button className="btn" style={{background:'#D32D28'}} onClick={null}>Reject Data</button>
      </div>
    </div>
  );
}

export default Publisher;
