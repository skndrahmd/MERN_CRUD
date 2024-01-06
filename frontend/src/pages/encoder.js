import { useState, useEffect } from "react";
import axios from "axios";

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
    const res = await axios.delete(`http://localhost:3001/data/${_id}`);
    fetchNotes();
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

    fetchNotes()

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

        <h1>Encoder</h1>
<div>
        <h2>Create record</h2>
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

          <button type="submit" onClick={null}>
            Create new record
          </button>
        </form>
</div>

<div>
      <h1>Records:</h1>
      {notes &&
        notes.map((record) => {
          return (

            <div key={record._id}>
              <h2>{record.Year}</h2>
              <h4>{record.Month}</h4>
              <h4>{record._id}</h4>
              <h4>{record.Comment}</h4>

              <button onClick={() => updateNote(record)}>Edit record</button>
              <button onClick={() => deleteNote(record._id)}>
                Delete record
              </button>
          </div>
          )
        })}
</div>

              {updateForm._id && (
                <div>
                  <h2>Update record</h2>
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
                      value={
                        updateForm[
                          "Total Non-Hazardous ( Landfill + Recycling)"
                        ]
                      }
                    />

                    <input
                      onChange={handleUpdateFieldChange}
                      name="Non-Hazardous Waste (Scrap Recycling))"
                      placeholder="Non-Hazardous Waste (Scrap Recycling))"
                      value={
                        updateForm["Non-Hazardous Waste (Scrap Recycling))"]
                      }
                    />

                    <input
                      onChange={handleUpdateFieldChange}
                      name="Non-Hazardous Waste (Disposal)"
                      placeholder="Non-Hazardous Waste (Disposal)"
                      value={updateForm["Non-Hazardous Waste (Disposal)"]}
                    />

                    <input
                      onChange={handleUpdateFieldChange}
                      name="Total GHG (CO2)"
                      placeholder="Total GHG (CO2)"
                      value={updateForm["Total GHG (CO2)"]}
                    />

                    <input
                      onChange={handleUpdateFieldChange}
                      name="Total Consumption R22 Gas"
                      placeholder="Total Consumption R22 Gas"
                      value={updateForm["Total Consumption R22 Gas"]}
                    />

                    <input
                      onChange={handleUpdateFieldChange}
                      name="Cost of Water (Sweat) Purchase_Treatment_Water Waste_Disposal"
                      placeholder="Cost of Water (Sweat) Purchase_Treatment_Water Waste_Disposal"
                      value={
                        updateForm[
                          "Cost of Water (Sweat) Purchase_Treatment_Water Waste_Disposal"
                        ]
                      }
                    />

                    <input
                      onChange={handleUpdateFieldChange}
                      name="Cost of Pruchased Electricity"
                      placeholder="Cost of Pruchased Electricity"
                      value={updateForm["Cost of Pruchased Electricity"]}
                    />

                    <input
                      onChange={handleUpdateFieldChange}
                      name="Cost of Diesel"
                      placeholder="Cost of Diesel"
                      value={updateForm["Cost of Diesel"]}
                    />

                    <input
                      onChange={handleUpdateFieldChange}
                      name="Cost of R22 Gas"
                      placeholder="Cost of R22 Gas"
                      value={updateForm["Cost of R22 Gas"]}
                    />

                    <input
                      onChange={handleUpdateFieldChange}
                      name="Cost of Hazardouse Waste Disposal"
                      placeholder="Cost of Hazardouse Waste Disposal"
                      value={updateForm["Cost of Hazardouse Waste Disposal"]}
                    />

                    <input
                      onChange={handleUpdateFieldChange}
                      name="Cost of Non-Hazardouse Waste Disposal"
                      placeholder="Cost of Non-Hazardouse Waste Disposal"
                      value={updateForm["Cost of Non-Hazardouse Waste Disposal"]}
                    />

                    <input
                      onChange={handleUpdateFieldChange}
                      name="Total Production Volume (Pallets Issue)"
                      placeholder="Total Production Volume (Pallets Issue)"
                      value={
                        updateForm["Total Production Volume (Pallets Issue)"]
                      }
                    />

                    <input
                      onChange={handleUpdateFieldChange}
                      name="Total Production Volume (Pallets Receive)"
                      placeholder="Total Production Volume (Pallets Receive)"
                      value={
                        updateForm["Total Production Volume (Pallets Receive)"]
                      }
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
                      value={
                        updateForm["Intensity - GHG (CO2) - Scope 1 and 2"]
                      }
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

                    <button type="submit">
                      Update record
                    </button>
                  </form>
                </div>
              )}
              
    </div>
  );
}

export default Encoder;
