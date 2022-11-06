var express = require('express');
var router = express.Router();

var ProductModel = require('../models/ProductModel.js');


router.post(
    '/create',          
    function(req, res) {

        var newDocument = {
            "brand": req.body.brand,
            "model": req.body.model,
            "price": req.body.price
        };

        ProductModel
        .create(newDocument)
        .then(
            function(dbDocument) {
                res.json(dbDocument);
            }
        )
        .catch(
            function(dbError) {
                console.log(dbError);
                res.send("Error occured /products/create");
            }
        );
    }
);

module.exports = router;