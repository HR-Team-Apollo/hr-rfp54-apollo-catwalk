# Welcome to Project Catwalk!

## Environment Setup:
* Install all package dependencies.
  ```
  npm install
  ```
* Start server via Vite @localhost:3000
  ```
  npm run dev
  ```

## Contributors:
* Caleb Broderick - Related Items & Comparisons
* Katie Kim - Overview
* Amalia Bryant - Ratings & Reviews
* Yasin Khan - Q & A

## API Calls:

* NOTE: All api calls with start with the local server api: 'http://localhost:3001/api'

* NOTE: Some GET requests have options to include parameters in them. When Incorporating parameters, follow in a style of using a '?' followed by the name of the parameter, and equals sign, and the value
* Ex: To get 8 products doing a call to '/products', do '/products?count=8'
* Separate with '&&' when using multiple parameters
* Ex: To get 11 products from page 3 doing a call to '/products', do '/products?count=8&&page=3'

--------------------------------------------------------------------------------------------------------------------------------

### Products

* Products
* METHOD: GET
* URL: '/products'
* Returns a list of products and their information

* PARAMETERS(optional):
* 'page' - integer - selects page of results. Default 1
* 'count' - integer - selects amount of products to return. Default 5

* Ex: '/products?count=9&&page=3' returns 9 products from page 3

--------------------------------------------------------------------------------------------------------------------------------

* Product Info
* METHOD: GET
* URL: '/products/:product_id'
* Returns a single product with expanded info for that product

* Ex: '/products/17067' returns the product info for product 17067

--------------------------------------------------------------------------------------------------------------------------------

* Product Styles
* METHOD: GET
* URL: '/products/:product_id/styles'
* Returns all styles for a given product

* Ex: '/products/17067/styles' returns all styles for product 17067

--------------------------------------------------------------------------------------------------------------------------------

* Related Products
* METHOD: GET
* URL: '/products/:product_id/styles'
* Returns all product ids related to a given product

* Ex: '/products/17067/related' returns all related product ids for product 17067

--------------------------------------------------------------------------------------------------------------------------------

### Reviews

* Reviews
* METHOD: GET
* URL: '/reviews'
* Returns a list of reviews for a given product

* PARAMETERS(optional):
* 'page' - integer - selects page of results. Default 1
* 'count' - integer - selects amount of products to return. Default 2
* 'sort' - text - Changes sort order based on 'newest', 'helpful', or 'relevant'. Default 'relative'
* 'product_id' - integer - Specifies product to get reviews for. Default 17067

* Ex: '/reviews?count=9&&page=3&&sort=helpful&&product_id=17067' returns 9 reviews from page 3 sorted by helpfulness for product 17067



* Review Metadata
* METHOD: GET
* URL: '/reviews/meta/:product_id'
* Returns review metadata for a given product

* Ex: '/products/meta/17067' returns review metadata for product 17067



* Post Review
* METHOD: POST
* URL: '/reviews'
* Returns a list of reviews for a given product

* Pass an object that has the following keys:
* product_id - integer - required ID of the product to post the review for
* rating - int(1-5) - indicates review rating
* summary - text - Summmary of review
* body - text - body of the review
* recommend - bool - Value indicating if reviewer recommends product
* name - text - Username for question asker
* email - text - Email address for quesiton asker
* photos - Array of texts - Array of urls that link to images to be shown
* characteristics - object - Object of keys representing characteristic_id and values representing the review value for that characteristic. { "14": 5, "15": 5 //...}

* Ex: '/reviews', assuming that the information passed into the request body has all keys shown above, this will post to the database, and return status OK

--------------------------------------------------------------------------------------------------------------------------------

* Mark review as Helpful
* METHOD: PUT
* URL: '/reviews/:review_id/helpful'
* updates a review to show it was found helpful

* Ex: '/reviews/246897/helpful', updates review 246897 to show that it was helpful

--------------------------------------------------------------------------------------------------------------------------------

* Report Review
* METHOD: PUT
* URL: '/reviews/:review_id/report'
* updates a review to show it was reported

* Ex: '/reviews/246897/reported', updates review 246897 to show that it was reported

--------------------------------------------------------------------------------------------------------------------------------

* Review and Characteristics
* METHOD: GET
* URL: '/reviews/chars'
* Returns an object of both the reviews information and meta information, including characteristics

* PARAMETER:
* 'product_id' - integer - specify product_id to get meta and review info

* Ex: '/reviews/chars?product_id=17067', Gets review info and meta info for product 17067