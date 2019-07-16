const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;

const LeadSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    full_name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    lead_source: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Lead', LeadSchema);
