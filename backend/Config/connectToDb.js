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

  // Import CSV
  console.log("Importing new data...");
  fs.createReadStream("ColdStore_CSV.csv")
    .pipe(csv())
    .on("data", (row) => {
      Data.create(row)
        .then(() => {
          console.log("Data inserted");
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .on("end", () => {
      console.log("CSV file successfully processed");
    });
}

// Run the import
importCSV();

module.exports = connectToDb;
