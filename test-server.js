var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

// middleware
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*'); // null or url
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', "origin, authorization, accept");//'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

// home page
app.get('/', function(req, res){
  //var result = [];
  //result.push({"message": "Welcome to the gmit catering api"});
  var result = {"message": "Welcome to the gmit catering api"};
  res.contentType('application/json');
  res.send(JSON.stringify(result));
});

// create user
app.get('/createuser/:customerLogin/:customerPW/:customerEmail/:customerMobile/:customerName/:customerSurname/:customerAddress', function(req, res){
  var result = {"customer_identifier":"11E576B38F799E9281B43FAA99013818"};
  res.contentType('application/json');
  res.send(JSON.stringify(result));
});

// login
app.get('/verifyuser/:customerLg/:customerPW', function(req, res){
  var result = {"customer_id":"11E4E6370B663F0D81B9EC9A743CC2AE","customer_name":"Regina","customer_surname":"Walsh","customer_cash":"10.20","customer_mobile":"0853243435"};
  res.contentType('application/json');
  res.send(JSON.stringify(result));
});

// get food
app.get('/getfood', function(req, res){
  var result = [{"food_id":"24151838022434910","food_name":"Still water","food_description":"500ml","food_price":"1.00","food_type":"DRINK","food_picture":"default.jpg"},{"food_id":"24151838022434911","food_name":"Sparkling water","food_description":"500ml","food_price":"1.00","food_type":"DRINK","food_picture":"default.jpg"},{"food_id":"24151838022434912","food_name":"Coca-Cola","food_description":"500ml","food_price":"1.50","food_type":"DRINK","food_picture":"default.jpg"},{"food_id":"24151838022434913","food_name":"Diet-Coke","food_description":"500ml","food_price":"1.50","food_type":"DRINK","food_picture":"default.jpg"},{"food_id":"24151838022434914","food_name":"Coca-Cola Zero","food_description":"500ml","food_price":"1.50","food_type":"DRINK","food_picture":"default.jpg"},{"food_id":"24151838022434918","food_name":"Tayto - C+O","food_description":"25g","food_price":"1.50","food_type":"CRISPS","food_picture":"default.jpg"},{"food_id":"24151838022434919","food_name":"Tayto - S+V","food_description":"25g","food_price":"1.50","food_type":"CRISPS","food_picture":"default.jpg"},{"food_id":"24151838022434920","food_name":"Hunky Dory - C+O","food_description":"25g","food_price":"1.50","food_type":"CRISPS","food_picture":"default.jpg"},{"food_id":"24151838022434921","food_name":"Hunky Dory - S+V","food_description":"25g","food_price":"1.50","food_type":"CRISPS","food_picture":"default.jpg"},{"food_id":"24151838022434922","food_name":"BLT","food_description":"Toast Turkey, Mixed leaves, Sliced Tomato, Red Onion, Mayonnaise","food_price":"3.95","food_type":"ROLL","food_picture":"BLT.jpg"},{"food_id":"24151838022434923","food_name":"Baked Ham & Cheese","food_description":"Baked Ham, Mozzarella Cheese, Cheddar Cheese, Country Relish","food_price":"3.95","food_type":"ROLL","food_picture":"BHC.jpg"},{"food_id":"24151838022434924","food_name":"Roast Turkey","food_description":"Toast Turkey, Mixed leaves, Sliced Tomato, Red Onion, Mayonnaise","food_price":"4.50","food_type":"ROLL","food_picture":"RoastTurkey.jpg"},{"food_id":"24151838022434925","food_name":"Vegetarian","food_description":"Creamy French Brie,Roast Tomato,Roast Pine Nuts, Mixed leaves, Onion, Pesto dressing","food_price":"4.75","food_type":"ROLL","food_picture":"Veg.jpg"},{"food_id":"24151838022434926","food_name":"Tuna","food_description":"Tuna, Red Onion, Peppers, Tomato, Crispy leaves, Black pepper","food_price":"4.50","food_type":"ROLL","food_picture":"Tuna.jpg"},{"food_id":"24151838022434927","food_name":"Cajun Chicken","food_description":"Chicken, Cajun Mayonnaise, Cheddar, Tomato, Mixed leaves, Onion","food_price":"4.50","food_type":"ROLL","food_picture":"CajunChicken.jpg"}];
  res.contentType('application/json');
  res.send(JSON.stringify(result));
});

// user history
app.get('/userhistory/:customerID/:customerPW', function(req, res){
  var result = {"orders":{"11E55B538748A90AA04434E6D77FF0A4":{"order_collected":"0","order_comments":"\"some comment\"","order_collection_time":"12:00:00","order_posted":"2015-09-15 02:42:50","food":[{"food_id":"23961698511618135","food_name":"BLT","food_description":"Grilled Bacon,\nSliced Tomato,\nCrisp Lettuce,\nMayonnaise\n","food_price":"3.95","food_count":"1","food_type":"ROLL","food_pic":"BLT.jpg"},{"food_id":"23961698511618141","food_name":"500ml still water","food_description":"","food_price":"1.00","food_count":"1","food_type":"DRINK","food_pic":"default.jpg"}]},"11E55B5318D7872CA04434E6D77FF0A4":{"order_collected":"0","order_comments":"\"some comment\"","order_collection_time":"12:00:00","order_posted":"2015-09-15 02:39:45","food":[{"food_id":"23961698511618135","food_name":"BLT","food_description":"Grilled Bacon,\nSliced Tomato,\nCrisp Lettuce,\nMayonnaise\n","food_price":"3.95","food_count":"1","food_type":"ROLL","food_pic":"BLT.jpg"},{"food_id":"23961698511618141","food_name":"500ml still water","food_description":"","food_price":"1.00","food_count":"1","food_type":"DRINK","food_pic":"default.jpg"}]},"11E55B5298FE5699A04434E6D77FF0A4":{"order_collected":"0","order_comments":"\"some comment\"","order_collection_time":"12:00:00","order_posted":"2015-09-15 02:36:10","food":[{"food_id":"23961698511618135","food_name":"BLT","food_description":"Grilled Bacon,\nSliced Tomato,\nCrisp Lettuce,\nMayonnaise\n","food_price":"3.95","food_count":"1","food_type":"ROLL","food_pic":"BLT.jpg"},{"food_id":"23961698511618141","food_name":"500ml still water","food_description":"","food_price":"1.00","food_count":"1","food_type":"DRINK","food_pic":"default.jpg"}]},"11E55B4CBF5920EDA04434E6D77FF0A4":{"order_collected":"0","order_comments":"\"some comment\"","order_collection_time":"12:00:00","order_posted":"2015-09-15 01:54:18","food":[{"food_id":"23961698511618135","food_name":"BLT","food_description":"Grilled Bacon,\nSliced Tomato,\nCrisp Lettuce,\nMayonnaise\n","food_price":"3.95","food_count":"1","food_type":"ROLL","food_pic":"BLT.jpg"},{"food_id":"23961698511618141","food_name":"500ml still water","food_description":"","food_price":"1.00","food_count":"1","food_type":"DRINK","food_pic":"default.jpg"}]}}};
  res.contentType('application/json');
  res.send(JSON.stringify(result));
});

// buy food
app.get('/buyfood/:customerID/:customerPW/:collectionTime', function(req, res){
  var result = {"status":"OK"};
  res.contentType('application/json');
  res.send(JSON.stringify(result));
});

// change user password
app.get('/changeuserpw/:customerID/:customerPW/:customerNewPW', function(req, res){
  var result = {"status":"OK"};
  res.contentType('application/json');
  res.send(JSON.stringify(result));
});

// working time
app.get('/workingtime', function(req, res){
  var result = {"OrdersCollectionTime":["12:00:00","14:00:00"],"TodaysWorkingTime":{"open_time":null,"close_time":null},"CurrentTime":"18:26:50"};
  res.contentType('application/json');
  res.send(JSON.stringify(result));
});

// top up
app.get('/topup/:customerID/:customerPW/:voucherID', function(req, res){
  var result = {"status":"OK"}; // {"status”:”INVALID”}
  res.contentType('application/json');
  res.send(JSON.stringify(result));
});

// recover user password
app.get('/recoveruserpw/:customerLg/:customerEmail', function(req, res){
  var result = {"status":"OK"};
  res.contentType('application/json');
  res.send(JSON.stringify(result));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

//var server = app.listen(9090, '127.0.0.1');
//193.1.57.4
//console.log("Web Service running on 127.0.0.1:9090");
