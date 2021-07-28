const axios = require('axios');
const CAMPUS_CODE = 'hr-rfp';
const API_KEY = require('../config/config.js');
const apiUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS_CODE}`;

axios.defaults.headers.common['Authorization'] = API_KEY;

module.exports = {

};