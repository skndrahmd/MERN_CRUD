const mongoose = require("mongoose");
const Data = require("../models/data.js");
const fs = require("fs");
const csv = require("csv-parser");

connectToDb().catch((err) => console.log(err));

async function connectToDb() {
  try {
    await mongoose.connect(
      "mongodb+srv://sikanderahmed40:S1k4nd3r5501@clusterarasco.1uhuho9.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected to db");
  } catch (err) {
    console.log(err);
  }
}

// Function to delete all records and re-import CSV
async function importCSV() {
  // Delete existing records
  console.log("Clearing existing data...");
  await Data.deleteMany({});

 
  const rows = [];

  fs.createReadStream("ColdStore_CSV_final.csv")
    .pipe(csv())
    .on("data", (row) => {
      rows.push(row); // append to array
    })
    .on("end", async () => {
      // Insert rows sequentially
      for (let row of rows) {
        await Data.create({
          Year: row.Year,
          Month: row.Month,
          "Water Intake (Purchased)": row["Water Intake (Purchased)"],
          "Water Use (Sweat) - Use": row["Water Use (Sweat) - Use"],
          "Water Loss": row["Water Loss"],
          "Wastewater Disposal (Outside)": row["Wastewater Disposal (Outside)"],
          "Total Energy": row["Total Energy"],
          "Energy Pruchased (Electricity)":
            row["Energy Pruchased (Electricity)"],
          "Energy (Diesel)": row["Energy (Diesel)"],
          "Total Waste": row["Total Waste"],
          "Total Hazardous Waste (Landfil)":
            row["Total Hazardous Waste (Landfil)"],
          "Hazardous Waste (Stream # 1)": row["Hazardous Waste (Stream # 1)"],
          "Hazardous Waste (Maintenace Oil)(With Density 0_93)":
            row["Hazardous Waste (Maintenace Oil)(With Density 0_93)"],
          "Total Non-Hazardous ( Landfill + Recycling)":
            row["Total Non-Hazardous ( Landfill + Recycling)"],
          "Non-Hazardous Waste (Scrap Recycling))":
            row["Non-Hazardous Waste (Scrap Recycling))"],
          "Non-Hazardous Waste (Disposal)":
            row["Non-Hazardous Waste (Disposal)"],
          "Total GHG (CO2)": row["Total GHG (CO2)"],
          "Total Consumption R22 Gas": row["Total Consumption R22 Gas"],
          "Cost of Water (Sweat) Purchase_Treatment_Water Waste_Disposal":
            row[
              "Cost of Water (Sweat) Purchase_Treatment_Water Waste_Disposal"
            ],
          "Cost of Pruchased Electricity": row["Cost of Pruchased Electricity"],
          "Cost of Diesel": row["Cost of Diesel"],
          "Cost of R22 Gas": row["Cost of R22 Gas"],
          "Cost of Hazardouse Waste Disposal":
            row["Cost of Hazardouse Waste Disposal"],
          "Cost of Non-Hazardouse Waste Disposal":
            row["Cost of Non-Hazardouse Waste Disposal"],
          "Total Production Volume (Pallets Issue)":
            row["Total Production Volume (Pallets Issue)"],
          "Total Production Volume (Pallets Receive)":
            row["Total Production Volume (Pallets Receive)"],
          "Total Area (Floor Covered Area)":
            row["Total Area (Floor Covered Area)"],
          "Intensity - Water": row["Intensity - Water"],
          "Intensity - Energy": row["Intensity - Energy"],
          "Intensity - Energy (Electricity)":
            row["Intensity - Energy (Electricity)"],
          "Intensity - Energy (Diesel)": row["Intensity - Energy (Diesel)"],
          "Intensity - GHG (CO2) - Scope 1 and 2":
            row["Intensity - GHG (CO2) - Scope 1 and 2"],
          "Intensity - Waste Material": row["Intensity - Waste Material"],
          "Total Cost": row["Total Cost"],
          Comment: row.Comment,
        });
      }

      console.log("Import complete!");
    });
}

// Run the import
importCSV();

module.exports = connectToDb;
