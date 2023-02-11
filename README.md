# NODE Express Crud with swagger documenration 
## _CRUD implementaion in local json file_



Node js, Express - powered CRUD .


## Features

- Add Product 
- Get Product by id
- Get All Products
- Update Product by id
- Delete ProductBy ID

## Installation

It requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd {Project Direcotory}
npm i
nodemon app
```

```sh
- Go to http://localhost:3000/api-docs/ for swagger documentation of all endpoints
- You can perform CRUD operation in swagger link or can use postman
```

```sh
- GET : http://localhost:3000/products (List All Products)
- GET : http://localhost:3000//product/{id} (Get Single Product by ID)
- POST: http://localhost:3000/product/addProduct  (Add new product)
- PUT: http://localhost:3000/product/{id}   (Update Existing product)
- Delete: http://localhost:3000/product/{id}   (Delete Existing product)
```

