require('dotenv').config()
const   faker = require('faker')
        , image = 'http://via.placeholder.com/150x150'
        , massive = require('massive')


massive(process.env.CONNECTION_STRING)
    .then( db => {
        console.log('DB Connected')
        const products = []
        for(let i=1; i<=50; i++){
            let prodName = faker.commerce.product()
            if(products.indexOf(prodName) === -1) {
              products.push(prodName)
            }
          }
          
          products.forEach( (product, i, arr) =>{
            let price = faker.commerce.price()
           
            db.populate_products_db([product, price, image])
            .then(response => console.log({response}))
            .catch(err => console.log({err}))
          })
    })
    .catch( err => console.log(err));
