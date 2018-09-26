const connection = require('../../db-config/mysql-connection');
let Order = {};

Order.getAll = ( res, cb ) => {
  if ( connection ) {
    connection.query('SELECT order_id, salad, bacon, cheese, meat, total_price, customer, address, email FROM orders', (error, data) => {
      if (error){
        return cb( error, res );
      }
      return cb( null, res, data );
    })
  } else {
    return cb('There was an error in the connection to MySQL :(', res)
  }
}

Order.save = ( order, res, cb ) => {
  if ( connection ) {
    connection.query('INSERT INTO orders SET ?', [order], (error, data) => {
      if (error){
        return cb( error, res );
      }
      return cb( null, res, data );
    })
  } else {
    return cb('There was an error in the connection to MySQL :(', res)
  }
}

Order.responceToClient = ( error, res, data ) => {
  if ( error )
    res.status(500).json(error);
  else
    res.status(200).json(data);
}

module.exports = Order;