const axios = require('axios');
const CAMPUS_CODE = 'hr-rfp';
const API_KEY = require('../config/config.js');
const apiUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS_CODE}`;
const path = require('path');
const fs = require('fs');

axios.defaults.headers.common['Authorization'] = API_KEY;

module.exports = {
  getAllProducts: (req, res) => {
    axios.get(`${apiUrl}/products`, {params: {count: req.query.count ? req.query.count : 5, page: req.query.page ? req.query.page : 1}})
      .then(resp => {
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
  },
  getAllRelatedProducts: (req, res) => {
    let prodId = req.params.product_id;
    let tempObj = {};
    axios.get(`${apiUrl}/products/${prodId}`)
      .then(prod => {
        tempObj.id = prod.data.id;
        tempObj.name = prod.data.name;
        tempObj.category = prod.data.category;
        axios.get(`${apiUrl}/products/${prodId}/styles`)
          .then(prodSt => {
            tempObj.original_price = prodSt.data.results[0].original_price;
            tempObj.sale_price = prodSt.data.results[0].sale_price;
            tempObj.url = prodSt.data.results[0].photos[0].thumbnail_url;
            axios.get(`${apiUrl}/reviews/meta/?product_id=${prodId}`)
              .then(prodRe => {
                let count = 0;
                let avg = 0;
                for (let rating in prodRe.data.ratings) {
                  count += Number(prodRe.data.ratings[rating]);
                  avg += Number(rating) * Number(prodRe.data.ratings[rating]);
                }
                tempObj.average_rating = avg / count;
                tempObj.characteristics = prodRe.data.characteristics;
                res.send(tempObj);
              })
              .catch(err => {
                res.send(err);
              });
          })
          .catch(err => {
            res.send(err);
          });
      })
      .catch(err => {
        res.send(err);
      });
  },
  writeRelatedProducts: (req, res) => {
    fs.writeFile(path.resolve(__dirname, '..', 'relatedProducts.txt'), req.body.products.toString(), (err) => {
      if (err) {
        res.send(err);
      } else {
        res.end('ok');
      }
    });
  },
  readRelatedProducts: (req, res) => {
    fs.readFile(path.resolve(__dirname, '..', 'relatedProducts.txt'), 'utf-8', (err, products) => {
      if (err) {
        res.send(err);
      } else {
        let results = products.split(',');
        if (results.length === 1 && results[0] === '[]') {
          results = [];
        } else {
          for (let i = 0; i < results.length; i++) {
            results[i] = results[i].trim();
          }
        }
        results = JSON.stringify({products: results});
        res.send(JSON.parse(results));
      }
    });
  }
};