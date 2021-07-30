const axios = require('axios');
const CAMPUS_CODE = 'hr-rfp';
const API_KEY = require('../config/config.js');
const apiUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS_CODE}`;

axios.defaults.headers.common['Authorization'] = API_KEY;

module.exports = {
  getAllReviews: (req, res) => {
    axios.get(`${apiUrl}/reviews`, {params: {count: req.query.count ? req.query.count : 2, page: req.query.page ? req.query.page : 1, sort: req.query.sort ? req.query.sort : 'relevant', product_id: req.query.product_id ? req.query.product_id : '17067'}})
      .then(resp => {
        res.send(resp.data);
      })
      .catch(err => {
        console.error(err);
        res.end();
      });
  },
  getAllReviewsMeta: (req, res) => {
    axios.get(`${apiUrl}/reviews/meta`, {params: {product_id: req.params.product_id}})
      .then(resp => {
        res.send(resp.data);
      })
      .catch(err => {
        console.error(err);
        res.end();
      });
  },
  postReview: (req, res) => {
    let params = {
      product_id: req.body.product_id,
      rating: req.body.rating,
      summary: req.body.summary,
      body: req.body.body,
      recommend: req.body.recommend,
      name: req.body.name,
      email: req.body.email,
      photos: req.body.photos,
      characteristics: req.body.characteristics
    };
    axios.post(`${apiUrl}/reviews`, params)
      .then(() => {
        res.send(res.statusCode);
      })
      .catch(err => {
        console.error(err);
        res.end();
      });
  },
  markAsHelpful: (req, res) => {
    axios.put(`${apiUrl}/reviews/${req.params.review_id}/helpful`)
      .then(() => {
        res.send(res.statusCode);
      })
      .catch(err => {
        console.error(err);
        res.end();
      });
  },
  reportReview: (req, res) => {
    axios.put(`${apiUrl}/reviews/${req.params.review_id}/report`)
      .then(() => {
        res.send(res.statusCode);
      })
      .catch(err => {
        console.error(err);
        res.end();
      });
  },
  getReviewAndChars: (req, res) => {
    axios.get(`${apiUrl}/reviews`, {params: {count: req.query.count ? req.query.count : 2, page: req.query.page ? req.query.page : 1, sort: req.query.sort ? req.query.sort : 'relevant', product_id: req.query.product_id ? req.query.product_id : '17067'}})
      .then(resp => {
        axios.get(`${apiUrl}/reviews/meta`, {params: {product_id: req.query.product_id}})
          .then(respo => {
            axios.get(`${apiUrl}/products/${req.query.product_id}/styles`)
              .then(respon => {
                axios.get(`${apiUrl}/products/${req.query.product_id}`)
                  .then(response => {
                    res.send({...resp.data, ...respo.data, ...respon.data, ...response.data});
                  })
                  .catch(err => {
                    console.error(err);
                    res.end();
                  });
              })
              .catch(err => {
                console.error(err);
                res.end();
              });
          })
          .catch(err => {
            console.error(err);
            res.end();
          });
      })
      .catch(err => {
        console.error(err);
        res.end();
      });
  }
};