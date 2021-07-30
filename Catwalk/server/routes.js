const router = require('express').Router();
const products = require('./services/products.js');
const reviews = require('./services/reviews.js');

router.get('/products', products.getAllProducts);

router.get('/products/:product_id', (req, res) => products.getProduct(req, res, req.params.product_id));

router.get('/products/:product_id/styles', (req, res) => products.getProductStyles(req, res, req.params.product_id));

router.get('/products/:product_id/related', (req, res) => products.getProductsRelated(req, res, req.params.product_id));

router.get('/products/:product_id/related/all', products.getAllRelatedProducts);

router.get('/reviews', reviews.getAllReviews);

router.get('/reviews/meta/:product_id', reviews.getAllReviewsMeta);

router.post('/reviews', reviews.postReview);

router.put('/reviews/:review_id/helpful', reviews.markAsHelpful);

router.put('/reviews/:review_id/report', reviews.reportReview);

router.get('/reviews/chars', reviews.getReviewAndChars);

router.post('/write', products.writeRelatedProducts);

router.get('/read', products.readRelatedProducts);


module.exports = router;