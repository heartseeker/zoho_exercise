const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://www.zohoapis.com/crm/v2',
    headers: {'Content-Type': 'application/json'}
});

module.exports = instance;