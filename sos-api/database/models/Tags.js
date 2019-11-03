const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    Long:Number,
    Lat:Number,
    Severity:Number
});   

/* Exports As Admin */
const Location = mongoose.model('Locations', LocationSchema);
module.exports = Location;