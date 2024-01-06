import { useState, useEffect } from "react";
import axios from "axios";

function Approver() {
  //current state is notes == change state is after setState
  const [notes, setNotes] = useState(null);
  const [createForm, setCreateForm] = useState({
    title: "",
    body: "",
  });
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: "",
    body: "",
  });

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

  const handleUpdateFieldChange = async (e) => {
    const { value, name } = e.target;

    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };

  const updateNote = async (record) => {
    //get current note values
    setUpdateForm({
      Year: record.Year,
      Month: record.Month,
      "Water Intake (Purchased)": record["Water Intake (Purchased)"],
      "Water Use (Sweat) - Use": record["Water Use (Sweat) - Use"],
      "Water Loss": record["Water Loss"],
      "Wastewater Disposal (Outside)": record["Wastewater Disposal (Outside)"],
      "Total Energy": record["Total Energy"],
      "Energy Pruchased (Electricity)":
        record["Energy Pruchased (Electricity)"],
      "Energy (Diesel)": record["Energy (Diesel)"],
      "Total Waste": record["Total Waste"],
      "Total Hazardous Waste (Landfil)":
        record["Total Hazardous Waste (Landfil)"],
      "Hazardous Waste (Stream # 1)": record["Hazardous Waste (Stream # 1)"],
      "Hazardous Waste (Maintenace Oil)(With Density 0_93)":
        record["Hazardous Waste (Maintenace Oil)(With Density 0_93)"],
      "Total Non-Hazardous ( Landfill + Recycling)":
        record["Total Non-Hazardous ( Landfill + Recycling)"],
      "Non-Hazardous Waste (Scrap Recycling))":
        record["Non-Hazardous Waste (Scrap Recycling))"],
      "Non-Hazardous Waste (Disposal)":
        record["Non-Hazardous Waste (Disposal)"],
      "Total GHG (CO2)": record["Total GHG (CO2)"],
      "Total Consumption R22 Gas": record["Total Consumption R22 Gas"],
      "Cost of Water (Sweat) Purchase_Treatment_Water Waste_Disposal":
        record["Cost of Water (Sweat) Purchase_Treatment_Water Waste_Disposal"],
      "Cost of Pruchased Electricity": record["Cost of Pruchased Electricity"],
      "Cost of Diesel": record["Cost of Diesel"],
      "Cost of R22 Gas": record["Cost of R22 Gas"],
      "Cost of Hazardouse Waste Disposal":
        record["Cost of Hazardouse Waste Disposal"],
      "Cost of Non-Hazardouse Waste Disposal":
        record["Cost of Non-Hazardouse Waste Disposal"],
      "Total Production Volume (Pallets Issue)":
        record["Total Production Volume (Pallets Issue)"],
      "Total Production Volume (Pallets Receive)":
        record["Total Production Volume (Pallets Receive)"],
      "Total Area (Floor Covered Area)":
        record["Total Area (Floor Covered Area)"],
      "Intensity - Water": record["Intensity - Water"],
      "Intensity - Energy": record["Intensity - Energy"],
      "Intensity - Energy (Electricity)":
        record["Intensity - Energy (Electricity)"],
      "Intensity - Energy (Diesel)": record["Intensity - Energy (Diesel)"],
      "Intensity - GHG (CO2) - Scope 1 and 2":
        record["Intensity - GHG (CO2) - Scope 1 and 2"],
      "Intensity - Waste Material": record["Intensity - Waste Material"],
      "Total Cost": record["Total Cost"],
      Comment: record.Comment,
      _id: record._id,
    });
    console.log(record);

    //set state on update form
  };

  // Update handler
  const update = async (e) => {
    // Prevent default form submit
    e.preventDefault();

    // Construct updated record
    const updatedRecord = {
      Year: updateForm.Year,
      Month: updateForm.Month,
      "Water Intake (Purchased)": updateForm["Water Intake (Purchased)"],
      "Water Use (Sweat) - Use": updateForm["Water Use (Sweat) - Use"],
      "Water Loss": updateForm["Water Loss"],
      "Wastewater Disposal (Outside)":
        updateForm["Wastewater Disposal (Outside)"],
      "Total Energy": updateForm["Total Energy"],
      "Energy Pruchased (Electricity)":
        updateForm["Energy Pruchased (Electricity)"],
      "Energy (Diesel)": updateForm["Energy (Diesel)"],
      "Total Waste": updateForm["Total Waste"],
      "Total Hazardous Waste (Landfil)":
        updateForm["Total Hazardous Waste (Landfil)"],
      "Hazardous Waste (Stream # 1)":
        updateForm["Hazardous Waste (Stream # 1)"],
      "Hazardous Waste (Maintenace Oil) - (With Density 0.93)":
        updateForm["Hazardous Waste (Maintenace Oil) - (With Density 0.93)"],
      "Total Non-Hazardous ( Landfill + Recycling)":
        updateForm["Total Non-Hazardous ( Landfill + Recycling)"],
      "Non-Hazardous Waste (Scrap Recycling))":
        updateForm["Non-Hazardous Waste (Scrap Recycling))"],
      "Non-Hazardous Waste (Disposal)":
        updateForm["Non-Hazardous Waste (Disposal)"],
      "Total GHG (CO2)": updateForm["Total GHG (CO2)"],
      "Total Consumption R22 Gas": updateForm["Total Consumption R22 Gas"],
      "Cost of Water (Sweat) Purchase / Treatment / Water Waste Disposal":
        updateForm[
          "Cost of Water (Sweat) Purchase / Treatment / Water Waste Disposal"
        ],
      "Cost of Pruchased Electricity":
        updateForm["Cost of Pruchased Electricity"],
      "Cost of Diesel": updateForm["Cost of Diesel"],
      "Cost of R22 Gas": updateForm["Cost of R22 Gas"],
      "Cost of Hazardouse Waste Disposal":
        updateForm["Cost of Hazardouse Waste Disposal"],
      "Cost of Non-Hazardouse Waste Disposal":
        updateForm["Cost of Non-Hazardouse Waste Disposal"],
      "Total Production Volume (Pallets Issue)":
        updateForm["Total Production Volume (Pallets Issue)"],
      "Total Production Volume (Pallets Receive)":
        updateForm["Total Production Volume (Pallets Receive)"],
      "Total Area (Floor Covered Area)":
        updateForm["Total Area (Floor Covered Area)"],
      "Intensity - Water": updateForm["Intensity - Water"],
      "Intensity - Energy": updateForm["Intensity - Energy"],
      "Intensity - Energy (Electricity)":
        updateForm["Intensity - Energy (Electricity)"],
      "Intensity - Energy (Diesel)": updateForm["Intensity - Energy (Diesel)"],
      "Intensity - GHG (CO2) - Scope 1 and 2":
        updateForm["Intensity - GHG (CO2) - Scope 1 and 2"],
      "Intensity - Waste Material": updateForm["Intensity - Waste Material"],
      "Total Cost": updateForm["Total Cost"],
      Comment: updateForm.Comment,
    };

    // Make PUT request to update
    const res = await axios.put(
      `http://localhost:3001/data/${updateForm._id}`,
      updatedRecord
    );

    fetchNotes();

    setUpdateForm({
      _id: null,
      Year: "",
      Month: "",
      "Water Intake (Purchased)": "",
      "Water Use (Sweat) - Use": "",
      "Water Loss": "",
      "Wastewater Disposal (Outside)": "",
      "Total Energy": "",
      "Energy Pruchased (Electricity)": "",
      "Energy (Diesel)": "",
      "Total Waste": "",
      "Total Hazardous Waste (Landfil)": "",
      "Hazardous Waste (Stream # 1)": "",
      "Hazardous Waste (Maintenace Oil)(With Density 0_93)": "",
      "Total Non-Hazardous ( Landfill + Recycling)": "",
      "Non-Hazardous Waste (Scrap Recycling))": "",
      "Non-Hazardous Waste (Disposal)": "",
      "Total GHG (CO2)": "",
      "Total Consumption R22 Gas": "",
      "Cost of Water (Sweat) Purchase_Treatment_Water Waste_Disposal": "",
      "Cost of Pruchased Electricity": "",
      "Cost of Diesel": "",
      "Cost of R22 Gas": "",
      "Cost of Hazardouse Waste Disposal": "",
      "Cost of Non-Hazardouse Waste Disposal": "",
      "Total Production Volume (Pallets Issue)": "",
      "Total Production Volume (Pallets Receive)": "",
      "Total Area (Floor Covered Area)": "",
      "Intensity - Water": "",
      "Intensity - Energy": "",
      "Intensity - Energy (Electricity)": "",
      "Intensity - Energy (Diesel)": "",
      "Intensity - GHG (CO2) - Scope 1 and 2": "",
      "Intensity - Waste Material": "",
      "Total Cost": "",
      Comment: "",
    });

    console.log(res.data);
  };

  return (
    <div className="App">
      <h1>Approver</h1>

      <h1>Records:</h1>
      {notes &&
        notes.map((record) => {
          return (
            <div key={record._id}>
              <h2>{record.Year}</h2>
              <h4>{record.Month}</h4>
              <h4>{record.Comment}</h4>

              <button onClick={() => updateNote(record)}>Write comment</button>
            </div>
          );
        })}

      {updateForm._id && (
        <div>
          <h2>Update note</h2>
          <form onSubmit={update}>
            <textarea
              onChange={handleUpdateFieldChange}
              name="Comment"
              placeholder="Comment"
              value={updateForm.Comment}
            />
            <button type="submit" onClick={null}>
              Confirm comment
            </button>
          </form>
        </div>
      )}

      <button onClick={null}>Approve</button>
      <button onClick={null}>Send back to Encoder</button>
    </div>
  );
}

export default Approver;
