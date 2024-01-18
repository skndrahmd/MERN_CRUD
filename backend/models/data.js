const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({

        Year: Number,
        Month: String,
        'Water Intake (Purchased)': Number,
        'Water Use (Sweat) - Use': Number,
        'Water Loss': Number,
        'Wastewater Disposal (Outside)': Number,
        'Total Energy': Number,
        'Energy Pruchased (Electricity)': Number,
        'Energy (Diesel)': Number,
        'Total Waste': Number,
        'Total Hazardous Waste (Landfil)': Number,
        'Hazardous Waste (Stream # 1)': Number,
        'Hazardous Waste (Maintenace Oil)(With Density 0_93)': Number,
        'Total Non-Hazardous ( Landfill + Recycling)': Number,
        'Non-Hazardous Waste (Scrap Recycling))': Number,
        'Non-Hazardous Waste (Disposal)': Number,
        'Total GHG (CO2)': Number,
        'Total Consumption R22 Gas': Number,
        'Cost of Water (Sweat) Purchase_Treatment_Water Waste_Disposal': Number,
        'Cost of Pruchased Electricity': Number,
        'Cost of Diesel': Number,
        'Cost of R22 Gas': Number,
        'Cost of Hazardouse Waste Disposal': Number,
        'Cost of Non-Hazardouse Waste Disposal': Number,
        'Total Production Volume (Pallets Issue)': Number,
        'Total Production Volume (Pallets Receive)': Number,
        'Total Area (Floor Covered Area)': Number,
        'Intensity - Water': Number,
        'Intensity - Energy': Number,
        'Intensity - Energy (Electricity)': Number,
        'Intensity - Energy (Diesel)': Number,
        'Intensity - GHG (CO2) - Scope 1 and 2': Number,
        'Intensity - Waste Material': Number,
        'Total Cost': Number, 
        Comment: String
}, {strict: false})

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;