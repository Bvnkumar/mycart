var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Here we are getting mobile items
router.use('/getitems',function(req,res){
  pool.query('select * from tmobile_items',function(err,result){
    if(result){
      console.log("Connected successfully",result);
      res.send(result);
    }else{
      console.log("Connection failed");
      res.send(err)
    }
  })
})


module.exports = router;
