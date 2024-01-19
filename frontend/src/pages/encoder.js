import { useState, useEffect } from "react";
import axios from "axios";
import "./encoder_css.css";
function Encoder() {
  //current state is notes == change state is after setState
  const [notes, setNotes] = useState(null);
  const [createForm, setCreateForm] = useState({
    Year: "",
    Month: "",
    "Water Intake (Purchased)": null,
    "Water Use (Sweat) - Use": null,
    "Water Loss": null,
    "Wastewater Disposal (Outside)": null,
    "Total Energy": null,
    "Energy Pruchased (Electricity)": null,
    "Energy (Diesel)": null,
    "Total Waste": null,
    "Total Hazardous Waste (Landfil)": null,
    "Hazardous Waste (Stream # 1)": null,
    "Hazardous Waste (Maintenace Oil)(With Density 0_93)": null,
    "Total Non-Hazardous ( Landfill + Recycling)": null,
    "Non-Hazardous Waste (Scrap Recycling))": null,
    "Non-Hazardous Waste (Disposal)": null,
    "Total GHG (CO2)": null,
    "Total Consumption R22 Gas": null,
    "Cost of Water (Sweat) Purchase_Treatment_Water Waste_Disposal": null,
    "Cost of Pruchased Electricity": null,
    "Cost of Diesel": null,
    "Cost of R22 Gas": null,
    "Cost of Hazardouse Waste Disposal": null,
    "Cost of Non-Hazardouse Waste Disposal": null,
    "Total Production Volume (Pallets Issue)": null,
    "Total Production Volume (Pallets Receive)": null,
    "Total Area (Floor Covered Area)": null,
    "Intensity - Water": null,
    "Intensity - Energy": null,
    "Intensity - Energy (Electricity)": null,
    "Intensity - Energy (Diesel)": null,
    "Intensity - GHG (CO2) - Scope 1 and 2": null,
    "Intensity - Waste Material": null,
    "Total Cost": null,
    Comment: "",
  });
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    Year: "",
    Month: "",
    "Water Intake (Purchased)": null,
    "Water Use (Sweat) - Use": null,
    "Water Loss": null,
    "Wastewater Disposal (Outside)": null,
    "Total Energy": null,
    "Energy Pruchased (Electricity)": null,
    "Energy (Diesel)": null,
    "Total Waste": null,
    "Total Hazardous Waste (Landfil)": null,
    "Hazardous Waste (Stream # 1)": null,
    "Hazardous Waste (Maintenace Oil)(With Density 0_93)": null,
    "Total Non-Hazardous ( Landfill + Recycling)": null,
    "Non-Hazardous Waste (Scrap Recycling))": null,
    "Non-Hazardous Waste (Disposal)": null,
    "Total GHG (CO2)": null,
    "Total Consumption R22 Gas": null,
    "Cost of Water (Sweat) Purchase_Treatment_Water Waste_Disposal": null,
    "Cost of Pruchased Electricity": null,
    "Cost of Diesel": null,
    "Cost of R22 Gas": null,
    "Cost of Hazardouse Waste Disposal": null,
    "Cost of Non-Hazardouse Waste Disposal": null,
    "Total Production Volume (Pallets Issue)": null,
    "Total Production Volume (Pallets Receive)": null,
    "Total Area (Floor Covered Area)": null,
    "Intensity - Water": null,
    "Intensity - Energy": null,
    "Intensity - Energy (Electricity)": null,
    "Intensity - Energy (Diesel)": null,
    "Intensity - GHG (CO2) - Scope 1 and 2": null,
    "Intensity - Waste Material": null,
    "Total Cost": null,
    Comment: "",
  });

  //Any function in this is executed as soon as the window is loaded..
  useEffect(() => {
    fetchNotes();
  }, []);



  const send_data = () => {
    const confirm_send = window.confirm("Send data for approval?")
    if (confirm_send){
      alert("Data sent for approval!")
    }else {
      alert("Data not sent for approval!")
    }
  }


  const fetchNotes = async () => {
    //fetch notes
    const res = await axios.get("http://localhost:3001/data");
    //set to state
    setNotes(res.data.data);
    console.log(res.data.data);
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
    const res = await axios.post("http://localhost:3001/data", createForm);
    fetchNotes();

    //clear form state
    setCreateForm({
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
    // console.log(res)
  };

  const deleteNote = async (_id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this record?"
    );
    if (confirm) {
      const res = await axios.delete(`http://localhost:3001/data/${_id}`);
      fetchNotes();
    } else {
      alert("Record not deleted!");
    }

    //console.log(res)
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
    const confirm_update = window.confirm("Confirm record update?");
  
    if (confirm_update) {
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
        "Intensity - Energy (Diesel)":
          updateForm["Intensity - Energy (Diesel)"],
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
    } else {
      alert("Record not updated!");
    }
  };
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
      <h1>DATA ENCODER</h1>
      <div>
        <h2>Add Record</h2>
        <form onSubmit={createNote}>
          <input
            onChange={updateCreateForm}
            name="Year"
            placeholder="Year"
            value={createForm.Year}
          />
          <input
            onChange={updateCreateForm}
            name="Month"
            placeholder="Month"
            value={createForm.Month}
          />
          <input
            onChange={updateCreateForm}
            name="Water Intake (Purchased)"
            placeholder="Water Intake (Purchased)"
            value={createForm["Water Intake (Purchased)"]}
          />

          <input
            onChange={updateCreateForm}
            name="Water Use (Sweat) - Use"
            placeholder="Water Use (Sweat) - Use"
            value={createForm["Water Use (Sweat) - Use"]}
          />

          <input
            onChange={updateCreateForm}
            name="Water Loss"
            placeholder="Water Loss"
            value={createForm["Water Loss"]}
          />

          <input
            onChange={updateCreateForm}
            name="Wastewater Disposal (Outside)"
            placeholder="Wastewater Disposal (Outside)"
            value={createForm["Wastewater Disposal (Outside)"]}
          />

          <input
            onChange={updateCreateForm}
            name="Total Energy"
            placeholder="Total Energy"
            value={createForm["Total Energy"]}
          />

          <input
            onChange={updateCreateForm}
            name="Energy Pruchased (Electricity)"
            placeholder="Energy Pruchased (Electricity)"
            value={createForm["Energy Pruchased (Electricity)"]}
          />

          <input
            onChange={updateCreateForm}
            name="Energy (Diesel)"
            placeholder="Energy (Diesel)"
            value={createForm["Energy (Diesel)"]}
          />

          <input
            onChange={updateCreateForm}
            name="Total Waste"
            placeholder="Total Waste"
            value={createForm["Total Waste"]}
          />

          <input
            onChange={updateCreateForm}
            name="Total Hazardous Waste (Landfil)"
            placeholder="Total Hazardous Waste (Landfil)"
            value={createForm["Total Hazardous Waste (Landfil)"]}
          />

          <input
            onChange={updateCreateForm}
            name="Hazardous Waste (Stream # 1)"
            placeholder="Hazardous Waste (Stream # 1)"
            value={createForm["Hazardous Waste (Stream # 1)"]}
          />

          <input
            onChange={updateCreateForm}
            name="Hazardous Waste (Maintenace Oil)(With Density 0_93)"
            placeholder="Hazardous Waste (Maintenace Oil)(With Density 0_93)"
            value={
              createForm["Hazardous Waste (Maintenace Oil)(With Density 0_93)"]
            }
          />

          <input
            onChange={updateCreateForm}
            name="Total Non-Hazardous ( Landfill + Recycling)"
            placeholder="Total Non-Hazardous ( Landfill + Recycling)"
            value={createForm["Total Non-Hazardous ( Landfill + Recycling)"]}
          />

          <input
            onChange={updateCreateForm}
            name="Non-Hazardous Waste (Scrap Recycling))"
            placeholder="Non-Hazardous Waste (Scrap Recycling))"
            value={createForm["Non-Hazardous Waste (Scrap Recycling))"]}
          />

          <input
            onChange={updateCreateForm}
            name="Non-Hazardous Waste (Disposal)"
            placeholder="Non-Hazardous Waste (Disposal)"
            value={createForm["Non-Hazardous Waste (Disposal)"]}
          />

          <input
            onChange={updateCreateForm}
            name="Total GHG (CO2)"
            placeholder="Total GHG (CO2)"
            value={createForm["Total GHG (CO2)"]}
          />

          <input
            onChange={updateCreateForm}
            name="Total Consumption R22 Gas"
            placeholder="Total Consumption R22 Gas"
            value={createForm["Total Consumption R22 Gas"]}
          />

          <input
            onChange={updateCreateForm}
            name="Cost of Water (Sweat) Purchase_Treatment_Water Waste_Disposal"
            placeholder="Cost of Water (Sweat) Purchase_Treatment_Water Waste_Disposal"
            value={
              createForm[
                "Cost of Water (Sweat) Purchase_Treatment_Water Waste_Disposal"
              ]
            }
          />

          <input
            onChange={updateCreateForm}
            name="Cost of Pruchased Electricity"
            placeholder="Cost of Pruchased Electricity"
            value={createForm["Cost of Pruchased Electricity"]}
          />

          <input
            onChange={updateCreateForm}
            name="Cost of Diesel"
            placeholder="Cost of Diesel"
            value={createForm["Cost of Diesel"]}
          />

          <input
            onChange={updateCreateForm}
            name="Cost of R22 Gas"
            placeholder="Cost of R22 Gas"
            value={createForm["Cost of R22 Gas"]}
          />

          <input
            onChange={updateCreateForm}
            name="Cost of Hazardouse Waste Disposal"
            placeholder="Cost of Hazardouse Waste Disposal"
            value={createForm["Cost of Hazardouse Waste Disposal"]}
          />

          <input
            onChange={updateCreateForm}
            name="Cost of Non-Hazardouse Waste Disposal"
            placeholder="Cost of Non-Hazardouse Waste Disposal"
            value={createForm["Cost of Non-Hazardouse Waste Disposal"]}
          />

          <input
            onChange={updateCreateForm}
            name="Total Production Volume (Pallets Issue)"
            placeholder="Total Production Volume (Pallets Issue)"
            value={createForm["Total Production Volume (Pallets Issue)"]}
          />

          <input
            onChange={updateCreateForm}
            name="Total Production Volume (Pallets Receive)"
            placeholder="Total Production Volume (Pallets Receive)"
            value={createForm["Total Production Volume (Pallets Receive)"]}
          />

          <input
            onChange={updateCreateForm}
            name="Total Area (Floor Covered Area)"
            placeholder="Total Area (Floor Covered Area)"
            value={createForm["Total Area (Floor Covered Area)"]}
          />

          <input
            onChange={updateCreateForm}
            name="Intensity - Water"
            placeholder="Intensity - Water"
            value={createForm["Intensity - Water"]}
          />

          <input
            onChange={updateCreateForm}
            name="Intensity - Energy"
            placeholder="Intensity - Energy"
            value={createForm["Intensity - Energy"]}
          />

          <input
            onChange={updateCreateForm}
            name="Intensity - Energy (Electricity)"
            placeholder="Intensity - Energy (Electricity)"
            value={createForm["Intensity - Energy (Electricity)"]}
          />

          <input
            onChange={updateCreateForm}
            name="Intensity - Energy (Diesel)"
            placeholder="Intensity - Energy (Diesel)"
            value={createForm["Intensity - Energy (Diesel)"]}
          />

          <input
            onChange={updateCreateForm}
            name="Intensity - GHG (CO2) - Scope 1 and 2"
            placeholder="Intensity - GHG (CO2) - Scope 1 and 2"
            value={createForm["Intensity - GHG (CO2) - Scope 1 and 2"]}
          />

          <input
            onChange={updateCreateForm}
            name="Intensity - Waste Material"
            placeholder="Intensity - Waste Material"
            value={createForm["Intensity - Waste Material"]}
          />

          <input
            onChange={updateCreateForm}
            name="Total Cost"
            placeholder="Total Cost"
            value={createForm["Total Cost"]}
          />

          <button className="btn" type="submit" onClick={null}>
            Create New Record
          </button>
        </form>
      </div>

      <div className="records">
        <h2>Records</h2>

        <div className="excel-header">
          {columnNames.map((columnName, index) => (
            <div key={index} className="box" style={{ color: "white" }}>
              <h4 style={{ margin: "0", whiteSpace: "nowrap" }}>
                {columnName}
              </h4>
            </div>
          ))}
        </div>

        {notes &&
          notes.map((record) => {
            const headings = Object.keys(record);
            const filteredRecord = Object.entries(record)
              .filter(([key]) => key !== "_id" && key !== "__v")
              .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

            return (
              <div className="record-2" key={record._id}>
                {Object.entries(filteredRecord).map(
                  ([heading, value], index) => (
                    <div key={index} className="box">
                      <h4
                        style={{
                          color: "white",
                          margin: "0",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {heading}
                      </h4>
                      <p>{value}</p>
                    </div>
                  )
                )}
                <button
                  className="edit-button"
                  onClick={() => updateNote(record)}
                >
                  {" "}
                  <svg class="edit-svgIcon" viewBox="0 0 512 512">
                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                  </svg>
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteNote(record._id)}
                >
                  <svg class="delete-svgIcon" viewBox="0 0 448 512">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                  </svg>{" "}
                </button>
              </div>
            );
          })}
      </div>

      {updateForm._id && (
        <div>
          <h2>Update Record</h2>
          <form onSubmit={update}>
            <input
              onChange={handleUpdateFieldChange}
              name="Year"
              placeholder="Year"
              value={updateForm.Year}
            />

            <input
              onChange={handleUpdateFieldChange}
              name="Month"
              placeholder="Month"
              value={updateForm.Month}
            />

            <input
              onChange={handleUpdateFieldChange}
              name="Water Intake (Purchased)"
              placeholder="Water Intake (Purchased)"
              value={updateForm["Water Intake (Purchased)"]}
            />

            <input
              onChange={handleUpdateFieldChange}
              name="Water Use (Sweat) - Use"
              placeholder="Water Use (Sweat) - Use"
              value={updateForm["Water Use (Sweat) - Use"]}
            />

            <input
              onChange={handleUpdateFieldChange}
              name="Water Loss"
              placeholder="Water Loss"
              value={updateForm["Water Loss"]}
            />

            <input
              onChange={handleUpdateFieldChange}
              name="Wastewater Disposal (Outside)"
              placeholder="Wastewater Disposal (Outside)"
              value={updateForm["Wastewater Disposal (Outside)"]}
            />

            <input
              onChange={handleUpdateFieldChange}
              name="Total Energy"
              placeholder="Total Energy"
              value={updateForm["Total Energy"]}
            />

            <input
              onChange={handleUpdateFieldChange}
              name="Energy Pruchased (Electricity)"
              placeholder="Energy Pruchased (Electricity)"
              value={updateForm["Energy Pruchased (Electricity)"]}
            />

            <input
              onChange={handleUpdateFieldChange}
              name="Energy (Diesel)"
              placeholder="Energy (Diesel)"
              value={updateForm["Energy (Diesel)"]}
            />

            <input
              onChange={handleUpdateFieldChange}
              name="Total Waste"
              placeholder="Total Waste"
              value={updateForm["Total Waste"]}
            />

            <input
              onChange={handleUpdateFieldChange}
              name="Total Hazardous Waste (Landfil)"
              placeholder="Total Hazardous Waste (Landfil)"
              value={updateForm["Total Hazardous Waste (Landfil)"]}
            />

            <input
              onChange={handleUpdateFieldChange}
              name="Hazardous Waste (Stream # 1)"
              placeholder="Hazardous Waste (Stream # 1)"
              value={updateForm["Hazardous Waste (Stream # 1)"]}
            />

            <input
              onChange={handleUpdateFieldChange}
              name="Hazardous Waste (Maintenace Oil)(With Density 0_93)"
              placeholder="Hazardous Waste (Maintenace Oil)(With Density 0_93)"
              value={
                updateForm[
                  "Hazardous Waste (Maintenace Oil)(With Density 0_93)"
                ]
              }
            />

            <input
              onChange={handleUpdateFieldChange}
              name="Total Non-Hazardous ( Landfill + Recycling)"
              placeholder="Total Non-Hazardous ( Landfill + Recycling)"
              value={updateForm["Total Production Volume (Pallets Receive)"]}
            />

            <input
              onChange={handleUpdateFieldChange}
              name="Total Area (Floor Covered Area)"
              placeholder="Total Area (Floor Covered Area)"
              value={updateForm["Total Area (Floor Covered Area)"]}
            />

            <input
              onChange={handleUpdateFieldChange}
              name="Intensity - Water"
              placeholder="Intensity - Water"
              value={updateForm["Intensity - Water"]}
            />

            <input
              onChange={handleUpdateFieldChange}
              name="Intensity - Energy"
              placeholder="Intensity - Energy"
              value={updateForm["Intensity - Energy"]}
            />

            <input
              onChange={handleUpdateFieldChange}
              name="Intensity - Energy (Electricity)"
              placeholder="Intensity - Energy (Electricity)"
              value={updateForm["Intensity - Energy (Electricity)"]}
            />

            <input
              onChange={handleUpdateFieldChange}
              name="Intensity - Energy (Diesel)"
              placeholder="Intensity - Energy (Diesel)"
              value={updateForm["Intensity - Energy (Diesel)"]}
            />

            <input
              onChange={handleUpdateFieldChange}
              name="Intensity - GHG (CO2) - Scope 1 and 2"
              placeholder="Intensity - GHG (CO2) - Scope 1 and 2"
              value={updateForm["Intensity - GHG (CO2) - Scope 1 and 2"]}
            />

            <input
              onChange={handleUpdateFieldChange}
              name="Intensity - Waste Material"
              placeholder="Intensity - Waste Material"
              value={updateForm["Intensity - Waste Material"]}
            />

            <input
              onChange={handleUpdateFieldChange}
              name="Total Cost"
              placeholder="Total Cost"
              value={updateForm["Total Cost"]}
            />

            <button className="btn" type="submit">
              Update Record
            </button>
          </form>
        </div>
      )}
      <div style={{ display: "flex" }}>
        <button className="nav-btn" onClick={send_data}>
          Send Data
        </button>
      </div>
    </div>
  );
}

export default Encoder;
