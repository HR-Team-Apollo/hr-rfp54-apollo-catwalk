const axios = require('axios');
const CAMPUS_CODE = 'hr-rfp';
const API_KEY = require('../config/config.js');
const apiUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS_CODE}`;

axios.defaults.headers.common['Authorization'] = API_KEY;

module.exports = {
  getAllProducts: (req, res) => {
    axios.get(`${apiUrl}/products`)
      .then(resp => {
        res.send(res);
        res.send(resp.data);
      })
      .catch(err => {
        res.send(err);
      });
  },
  getProduct: (req, res, product_id) => {
    axios.get(`${apiUrl}/products/${product_id}`)
      .then(resp => {
        res.send(resp.data);
      })
      .catch(err => {
        res.send(err);
      });
  },
  getProductStyles: (req, res, product_id) => {
    axios.get(`${apiUrl}/products/${product_id}/styles`)
      .then(resp => {
        res.send(resp.data);
      })
      .catch(err => {
        res.send(err);
      });
  },
  getProductsRelated: (req, res, product_id) => {
    axios.get(`${apiUrl}/products/${product_id}/related`)
      .then(resp => {
        res.send(resp.data);
      })
      .catch(err => {
        res.send(err);
      });
  }
};