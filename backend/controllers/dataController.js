const Data = require('../models/data.js')

//fetch all Datas
const fetchAllData = async (req, res) => {
    //Find the Data
    const data = await Data.find();
  
    //respond with the Data
    res.json({ data : data });
  };
  
  //fetch a specific Data
  const fetchDataById = async (req, res) => {
    //get id from url
    const Data_id = req.params.id;
    //find Data using that id
    const data = await Data.findById(Data_id);
    //respond with the Data
    res.json({ data: data });
  };
  
// Create new data
const createData = async (req, res) => {
  const newData = await Data.create({
    Year: req.body.Year,
    Month: req.body.Month,
    'Water Intake (Purchased)': req.body['Water Intake (Purchased)'],
    'Water Use (Sweat) - Use': req.body['Water Use (Sweat) - Use'],
    'Water Loss': req.body['Water Loss'],
    'Wastewater Disposal (Outside)': req.body['Wastewater Disposal (Outside)'],
    'Total Energy': req.body['Total Energy'],
    'Energy Pruchased (Electricity)': req.body['Energy Pruchased (Electricity)'],
    'Energy (Diesel)': req.body['Energy (Diesel)'],
    'Total Waste': req.body['Total Waste'],
    'Total Hazardous Waste (Landfil)': req.body['Total Hazardous Waste (Landfil)'],
    'Hazardous Waste (Stream # 1)': req.body['Hazardous Waste (Stream # 1)'],
    'Hazardous Waste (Maintenace Oil)(With Density 0_93)': req.body['Hazardous Waste (Maintenace Oil)(With Density 0_93)'],
    'Total Non-Hazardous ( Landfill + Recycling)': req.body['Total Non-Hazardous ( Landfill + Recycling)'],
    'Non-Hazardous Waste (Scrap Recycling))': req.body['Non-Hazardous Waste (Scrap Recycling))'],
    'Non-Hazardous Waste (Disposal)': req.body['Non-Hazardous Waste (Disposal)'],
    'Total GHG (CO2)': req.body['Total GHG (CO2)'],
    'Total Consumption R22 Gas': req.body['Total Consumption R22 Gas'],
    'Cost of Water (Sweat) Purchase_Treatment_Water Waste_Disposal': req.body['Cost of Water (Sweat) Purchase_Treatment_Water Waste_Disposal'],
    'Cost of Pruchased Electricity': req.body['Cost of Pruchased Electricity'],
    'Cost of Diesel': req.body['Cost of Diesel'],
    'Cost of R22 Gas': req.body['Cost of R22 Gas'],
    'Cost of Hazardouse Waste Disposal': req.body['Cost of Hazardouse Waste Disposal'],
    'Cost of Non-Hazardoose Waste Disposal': req.body['Cost of Non-Hazardoose Waste Disposal'],
    'Total Production Volume (Pallets Issue)': req.body['Total Production Volume (Pallets Issue)'],
    'Total Production Volume (Pallets Receive)': req.body['Total Production Volume (Pallets Receive)'],
    'Total Area (Floor Covered Area)': req.body['Total Area (Floor Covered Area)'],  
    'Intensity - Water': req.body['Intensity - Water'],
    'Intensity - Energy': req.body['Intensity - Energy'],
    'Intensity - Energy (Electricity)': req.body['Intensity - Energy (Electricity)'],
    'Intensity - Energy (Diesel)': req.body['Intensity - Energy (Diesel)'],
    'Intensity - GHG (CO2) - Scope 1 and 2': req.body['Intensity - GHG (CO2) - Scope 1 and 2'],
    'Intensity - Waste Material': req.body['Intensity - Waste Material'],
    'Total Cost': req.body['Total Cost'], 
    Comment: req.body.Comment
  });

  res.status(201).json(newData);
}

// Update existing data
const updateData = async (req, res) => {
  const id = req.params.id;

  const updatedData = await Data.findByIdAndUpdate(id, {
    Year: req.body.Year,
    Month: req.body.Month,
    'Water Intake (Purchased)': req.body['Water Intake (Purchased)'],
    'Water Use (Sweat) - Use': req.body['Water Use (Sweat) - Use'],
    'Water Loss': req.body['Water Loss'],
    'Wastewater Disposal (Outside)': req.body['Wastewater Disposal (Outside)'],
    'Total Energy': req.body['Total Energy'],
    'Energy Pruchased (Electricity)': req.body['Energy Pruchased (Electricity)'],
    'Energy (Diesel)': req.body['Energy (Diesel)'],
    'Total Waste': req.body['Total Waste'],
    'Total Hazardous Waste (Landfil)': req.body['Total Hazardous Waste (Landfil)'],
    'Hazardous Waste (Stream # 1)': req.body['Hazardous Waste (Stream # 1)'],
    'Hazardous Waste (Maintenace Oil)(With Density 0_93)': req.body['Hazardous Waste (Maintenace Oil)(With Density 0_93)'],
    'Total Non-Hazardous ( Landfill + Recycling)': req.body['Total Non-Hazardous ( Landfill + Recycling)'],
    'Non-Hazardous Waste (Scrap Recycling))': req.body['Non-Hazardous Waste (Scrap Recycling))'],
    'Non-Hazardous Waste (Disposal)': req.body['Non-Hazardous Waste (Disposal)'],
    'Total GHG (CO2)': req.body['Total GHG (CO2)'],
    'Total Consumption R22 Gas': req.body['Total Consumption R22 Gas'],
    'Cost of Water (Sweat) Purchase_Treatment_Water Waste_Disposal': req.body['Cost of Water (Sweat) Purchase_Treatment_Water Waste_Disposal'],
    'Cost of Pruchased Electricity': req.body['Cost of Pruchased Electricity'],
    'Cost of Diesel': req.body['Cost of Diesel'],
    'Cost of R22 Gas': req.body['Cost of R22 Gas'],  
    'Cost of Hazardouse Waste Disposal': req.body['Cost of Hazardouse Waste Disposal'],
    'Cost of Non-Hazardoose Waste Disposal': req.body['Cost of Non-Hazardoose Waste Disposal'],
    'Total Production Volume (Pallets Issue)': req.body['Total Production Volume (Pallets Issue)'],
    'Total Production Volume (Pallets Receive)': req.body['Total Production Volume (Pallets Receive)'],
    'Total Area (Floor Covered Area)': req.body['Total Area (Floor Covered Area)'],
    'Intensity - Water': req.body['Intensity - Water'],
    'Intensity - Energy': req.body['Intensity - Energy'],
    'Intensity - Energy (Electricity)': req.body['Intensity - Energy (Electricity)'],
    'Intensity - Energy (Diesel)': req.body['Intensity - Energy (Diesel)'],
    'Intensity - GHG (CO2) - Scope 1 and 2': req.body['Intensity - GHG (CO2) - Scope 1 and 2'],
    'Intensity - Waste Material': req.body['Intensity - Waste Material'],
    'Total Cost': req.body['Total Cost'], 
    Comment: req.body.Comment
  }, {new: true});

  res.json(updatedData);
}
  
  //delete a Data
  const deleteData = async (req, res) => {
    const id = req.params.id;
  
    const deleted_Data = await Data.findByIdAndDelete(id);
  
    res.json({ Data: deleted_Data });
  };
  
  module.exports = {
    fetchAllData,
    fetchDataById,
    createData,
    updateData,
    deleteData,
  };
  