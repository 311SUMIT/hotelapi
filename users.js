var express = require('express');
var router = express.Router();
var db=require('../db');
var bodyparser=require('body-parser');
router.use(bodyparser.json());


/* GET users listing. */
router.get('/', function(req, res, next) {
  var sql="select * from hotel";
  db.query(sql,function(err,rows,fields){
    res.status(500).send({error:'somthig wfailed'})
  })
  res.send('respond with a resource');
});

/*get method for fetch single product*/
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  var sql = `SELECT * FROM products WHERE id=${id}`;
  db.query(sql, function(err, row, fields) {
    if(err) {
      res.status(500).send({ error: 'Something failed!' })
    }
    res.json(row[0])
  })
});


/*post method for create product*/
router.post('/create', function(req, res, next) {
  var name = req.body.name;
  var sku = req.body.sku;
  var price = req.body.price;

  var sql = `INSERT INTO products (name, first, last, price,mobileno created_at) VALUES ("${name}", "${first}", "${last}","${price}","${mobileno},
 1, NOW())`;
  db.query(sql, function(err, result) {
    if(err) {
      res.status(500).send({ error: 'Something failed!' })
    }
    res.json({'status': 'success', id: result.insertId})
  })
});

/*put method for update product*/
router.put('/update/:id', function(req, res, next) {
  var id = req.params.id;
  var first = req.body.first;
  var last = req.body.last;
  var  price= req.body.price;
  var  mobileno= req.body.mobileno;

  var sql = `UPDATE products SET first="${first}",last="${last}", price="${price}", mobileno="${mobileno }"WHERE id=${id}`;
  db.query(sql, function(err, result) {
    if(err) {
      res.status(500).send({ error: 'Something failed!' })
    }
    res.json({'status': 'success'})
  })
});

*/delete method for delete product*/
router.delete('/delete/:id', function(req, res, next) {
  var id = req.params.id;
  var sql = `DELETE FROM products WHERE id=${id}`;
  db.query(sql, function(err, result) {
    if(err) {
      res.status(500).send({ error: 'Something failed!' })s
    }
    res.json({'status': 'success'})
  })
})

module.exports = router;
