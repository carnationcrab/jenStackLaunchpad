var express = require( 'express');
var path = require( 'path' );
var port = 3000;
var app = express();
var counter = 0;

app.use( express.static( 'public' ) );

// spin up server
app.listen( port, function(){
  // server side logs show up in terminal
  console.log( 'server up on', port );
}); // end spin up server

// base url
app.get( '/', function( req, res ){
  // this is the root url
  console.log( 'base URL hit' );
  counter ++
  console.log('got hit', counter, 'times');
  res.sendFile( path.resolve( 'views/index.html' )
);
}); // end base url

app.get('/glasses', function(req, res){
  console.log('getting glasses');
  res.send('we both wear them');
  counter ++
  console.log('got hit', counter, 'times');
});

app.get('/waterBottles', function(req, res){
  console.log('getting waterBottles');
  res.send('that sweet, sweet hydration');
  counter ++
  console.log('got hit', counter, 'times');

});
