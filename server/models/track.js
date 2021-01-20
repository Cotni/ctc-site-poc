var mongoose = require('mongoose');

var Schema = mongoose.Schema;

trackSchema = new mongoose.Schema({
    phase:           {type: String, enum: ["pending", "submission", "rejected", "testing", "accepted", "in"]},
    name:               {type: String, minlength: 1, maxlength: 40},
    version:            {type: String, minlength: 1, maxlength: 40},
    authors:            {type: [String]},
    dlLink:             {type: String, required: true},
    slot:               {type: String},
    music:              {type: String},
    submissionNotes:    String,
    submissionDate:     Date,
    submitterID:        String
});

module.exports = mongoose.model('track', trackSchema)