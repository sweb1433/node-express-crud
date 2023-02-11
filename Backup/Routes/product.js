const express = require("express")
const productRoutes = express.Router();
const fs = require('fs');

const dataPath = './Details/products.json' 

// util functions 

const saveProductData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
}

const getProductData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)    
}


// reading the data
productRoutes.get('/products', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

// Get Single Product
productRoutes.get('/product/:id', (req, res) => {
  const productId = req.params['id'];
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    let dataJSON = JSON.parse(data)
    if(dataJSON[productId])
      res.send(dataJSON[productId]);
    else{
      res.status(404)
      res.send({message: "Product not found"})
    }
      
  });
});


  productRoutes.post('/product/addProduct', (req, res) => {
   
    var existProducts = getProductData()
    const newProductId = Math.floor(100000 + Math.random() * 900000)
   
    existProducts[newProductId] = req.body
     
    console.log(existProducts);

    saveProductData(existProducts);
    res.send({success: true, msg: 'product data added successfully'})
})

// Read - get all products from the json file
productRoutes.get('/products/list', (req, res) => {
  const products = getProductData()
  res.send(products)
})

// Update - using Put method
productRoutes.put('/product/:id', (req, res) => {
   var existproducts = getProductData()
   fs.readFile(dataPath, 'utf8', (err, data) => {
    const productId = req.params['id'];
    existproducts[productId] = req.body;

    saveProductData(existproducts);
    res.send({message: `product with id ${productId} has been updated`})
  }, true);
});

//delete - using delete method
productRoutes.delete('/product/delete/:id', (req, res) => {
   fs.readFile(dataPath, 'utf8', (err, data) => {
    var existProducts = getProductData()

    const productId = req.params['id'];

    delete existProducts[productId];  
    saveProductData(existProducts);
    res.send({message: `product with id ${productId} has been deleted`})
  }, true);
})
module.exports = productRoutes