import { useState, useEffect } from "react";
import axios from "axios";
import "./encoder_css.css";
import Swal from "sweetalert2"
function Publisher() {
  //current state is notes == change state is after setState
  const [notes, setNotes] = useState(null);

  //Any function in this is executed as soon as the window is loaded..
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    //fetch notes
    const res = await axios.get("http://localhost:3001/data");
    //set to state
    setNotes(res.data.data);
  };

  const confirm_publish = () => {
    Swal.fire({
      title: "Are You Sure ?",
      text: "Data will be published !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Publish !"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Success !",
          text: "Your Data has been successfuly Published !",
          icon: "success"
        });
      }
    });

  };

  const confirm_reject = () => {
    Swal.fire({
      title: "Are You Sure ?",
      text: "Data will be sent back for revisions !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Send Back !"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Success!",
          text: "Data has been sent for revisions !",
          icon: "success"
        });
      }
    });

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
      <div>
        <h1>DATA PUBLISHER</h1>
      </div>

      <h2>Records</h2>
      <div className="excel-header">
        {columnNames.map((columnName, index) => (
          <div key={index} className="box" style={{ color: "white" }}>
            <h4 style={{ margin: "0px", whiteSpace: "nowrap" }}>
              {columnName}
            </h4>
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
                <div key={index} className="box">
                  <h4
                    style={{
                      color: "white",
                      margin: "0px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {heading}
                  </h4>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          );
        })}
      <div style={{ display: "flex" }}>
        <button className="nav-btn" onClick={confirm_publish}>
          Publish Data
        </button>
        <button
          className="btn"
          style={{ background: "#D32D28" }}
          onClick={confirm_reject}
        >
          Reject Data
        </button>
      </div>
    </div>
  );
}

export default Publisher;