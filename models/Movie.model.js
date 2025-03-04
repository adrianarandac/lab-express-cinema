const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    name: { type: String, require: true, unique: true }, 
    propellers: { type: Number, require: true, min: 1},       
    maxSpeed: { type: Number, require: true},
  });