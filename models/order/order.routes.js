const express = require('express')
const router = express.Router()
const Order = require('./order.model')

router
.post('/',( req, res ) => {
  const order = {
    order_id: null,
    salad: req.body.salad,
    bacon: req.body.bacon,
    cheese: req.body.cheese,
    meat: req.body.meat,
    total_price: req.body.total_price,
    customer: req.body.customer,
    address: req.body.address,
    email: req.body.email
  }

  return Order.save( order, res, Order.responceToClient );
})

.get('/', ( req, res ) => {
  return Order.getAll( res, Order.responceToClient );
})

module.exports = router;