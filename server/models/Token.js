const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;

const TokenSchema = new Schema({
    access_token: {
        type: String,
        required: true,
    },
    expires_in_sec: {
        type: String,
        required: true,
    },
    api_domain: {
        type: String,
        required: true,
    },
    token_type: {
        type: String,
        required: true,
    },
    expires_in: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Token', TokenSchema);